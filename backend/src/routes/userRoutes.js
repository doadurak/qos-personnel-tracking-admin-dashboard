import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// SADECE ADMIN
router.get(
  "/all",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAllUsers
);

export default router;
