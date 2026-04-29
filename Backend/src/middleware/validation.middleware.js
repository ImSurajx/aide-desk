import { validationResult } from "express-validator";
import { AppError } from "../utils/errorHandler.js";
import { HTTP_STATUS } from "../config/constants.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg).join(", ");
    return next(new AppError(errorMessages, HTTP_STATUS.BAD_REQUEST));
  }
  next();
};
