"use server";

import { cookies } from "next/headers";

export const setSessionToken = async (sessionCookie: string) => {
  try {
    const cookieStore = await cookies();

    cookieStore.set("session", sessionCookie, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });
  } catch (error) {
    console.error("Error setting session token:", error);
    throw error;
  }
};

export const getSessionToken = async () => {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("session")?.value || null;
  } catch (error) {
    console.error("Error getting session token:", error);
    throw error;
  }
};
