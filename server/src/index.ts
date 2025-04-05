import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Import routes
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
