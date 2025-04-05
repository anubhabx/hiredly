import { type Request, type Response, Router } from "express";
import User from "../models/User.model";
import { auth } from "../firebase/admin";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { name, uid, email, password, idToken } = req.body;

  try {
    const userRecord = await User.findOne({ uid });
    if (userRecord) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newUser = new User({
      uid,
      name,
      email,
      password,
    });

    await newUser.save();

    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: 60 * 60 * 24 * 7 * 1000, // 7 days
    });

    res.status(201).json({ success: true, sessionCookie });
  } catch (error: any) {
    console.error("Failed to sign up a user", error);

    if (error.code === "auth/email-already-in-use") {
      res.status(400).json({ message: "Email already in use" });
      return;
    }

    res.status(500).json({ message: "Internal server error" });
  }
};
