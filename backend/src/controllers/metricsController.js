import PerformanceMetric from "../models/PerformanceMetric.js";

export const getDailyPerformance = async (req, res) => {
  try {
    const metrics = await PerformanceMetric.find()
      .sort({ date: 1 })
      .limit(7);

    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: "Metrics fetch failed" });
  }
};
