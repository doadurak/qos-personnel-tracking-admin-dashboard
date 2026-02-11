import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import metricsRoutes from "./routes/metricsRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/metrics", metricsRoutes);


app.get("/api/health", (req, res) => {
  console.log("HEALTH HIT");
  res.json({ ok: true });
});

app.listen(5000, () => {
  console.log("🚀 Express server running on port 5000");
});
