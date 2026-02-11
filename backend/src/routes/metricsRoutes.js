import express from "express";
import { getDailyPerformance } from "../controllers/metricsController.js";

const router = express.Router();

router.get("/daily-performance", getDailyPerformance);

export default router;
