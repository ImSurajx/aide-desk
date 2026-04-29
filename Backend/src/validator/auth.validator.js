import { body } from "express-validator";

/**
 * Standard rules for registering a new user
 * TODO : COnfigure this according to our schema and requirements, currently it is just a template for reference
 */
export const registerValidator = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Full name must be between 5 and 50 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email address")
    .normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 12 })
    .withMessage("Password must be at least 8 - 12 characters long")
    .matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)
    .withMessage(
      "Password can only contain letters, numbers, and special characters",
    ),
  body("role")
    .optional()
    .isIn(["agent", "admin"])
    .withMessage("Invalid role - User can be either agent or admin"),
  body(""),
];

/**
 * Standard rules for logging in an existing user
 */
export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email address")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];
