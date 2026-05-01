//Create Router
import express, { Router } from "express";
const router = express.Router();

// ============================================
// Import Controllers & Middlewares
// ============================================
import {
  registerController,
  verifyEmailToken,
} from "../controllers/auth.controller.js";
import { registerValidator } from "../validator/auth.validator.js";
import { validate } from "../middleware/validation.middleware.js";

// ============================================
// Routes
// ============================================
/**
 * @route - /api/auth/register
 * @description - Register a new user
 * @access - public
 */
router.post("/register", registerValidator, validate, registerController);

/**
 //`http://localhost:${config.PORT}/api/auth/verify/${token}`,
 * @route - /api/auth/verify/:token
 * @description - Verify
 * @access - private
 */
router.get("/verify/:token", verifyEmailToken);

// ============================================
// Export Router
// ============================================
export default router;
