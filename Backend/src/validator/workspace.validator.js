import { body } from 'express-validator';

export const createWorkspaceValidator = [
  body('name')
    .trim()
    .notEmpty().withMessage('Workspace name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),

  body('slug')
    .optional()
    .trim()
    .toLowerCase()
    .matches(/^[a-z0-9-]+$/).withMessage('Slug can only contain lowercase letters, numbers, and hyphens')
    .isLength({ min: 2, max: 60 }).withMessage('Slug must be between 2 and 60 characters'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Description cannot exceed 200 characters'),

  body('branding.primaryColor')
    .optional()
    .matches(/^#[0-9A-Fa-f]{6}$/).withMessage('Primary color must be a valid hex color (e.g. #2563eb)'),

  body('branding.logo')
    .optional()
    .trim()
    .isURL().withMessage('Logo must be a valid URL'),
];

export const updateWorkspaceValidator = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Description cannot exceed 200 characters'),

  body('branding.primaryColor')
    .optional()
    .matches(/^#[0-9A-Fa-f]{6}$/).withMessage('Primary color must be a valid hex color'),

  body('branding.logo')
    .optional()
    .trim()
    .isURL().withMessage('Logo must be a valid URL'),
];

export const updateWorkspaceStatusValidator = [
  body('status')
    .notEmpty().withMessage('Status is required')
    .isIn(['active', 'suspended']).withMessage('Status must be active or suspended'),
];
