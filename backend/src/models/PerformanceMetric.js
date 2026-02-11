import mongoose from "mongoose";

const performanceMetricSchema = new mongoose.Schema(
  {
    date: { type: String, required: true }, // "2026-01-15"
    averageSp: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model(
  "PerformanceMetric",
  performanceMetricSchema,
  "performance_metrics"
);
