//Create Router
import express from "express";
const router = express.Router();

// ============================================
// Import Controllers & Middlewares
// ============================================
import { registerController } from "../controllers/auth.controller.js";
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

// ============================================
// Export Router
// ============================================
export default router;
