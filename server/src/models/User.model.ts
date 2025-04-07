import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  photoURL: {
    type: String,
    default: "https://avatar.iran.liara.run/public",
  },
});

const User = mongoose.model("User", userSchema);

export default User;

export type UserType = mongoose.InferSchemaType<typeof userSchema>;
