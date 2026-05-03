import express from 'express';
const router = express.Router();

import {
  createWorkspace,
  getWorkspaces,
  getWorkspace,
  updateWorkspace,
  updateWorkspaceStatus,
  deleteWorkspace
} from '../controllers/workspace.controller.js';

import {
  createWorkspaceValidator,
  updateWorkspaceValidator,
  updateWorkspaceStatusValidator
} from '../validator/workspace.validator.js';
import { validate } from '../middleware/validation.middleware.js';
import { protect, requireRole } from '../middleware/auth.middleware.js';

// All workspace routes require admin auth
router.use(protect);
router.use(requireRole('admin'));

/**
 * @route  POST /api/workspaces
 * @desc   Admin creates a workspace for their company
 * @access Private — Admin
 */
router.post('/create', createWorkspaceValidator, validate, createWorkspace);

/**
 * @route  GET /api/workspaces
 * @desc   List all workspaces for admin's company
 * @access Private — Admin
 */
router.get('/getAll', getWorkspaces);

/**
 * @route  GET /api/workspaces/:id
 * @desc   Single workspace details + member/ticket/chat counts
 * @access Private — Admin
 */
router.get('/:id', getWorkspace);

/**
 * @route  PATCH /api/workspaces/:id
 * @desc   Update workspace name, description, branding
 * @access Private — Admin
 */
router.patch('/:id', updateWorkspaceValidator, validate, updateWorkspace);

/**
 * @route  PATCH /api/workspaces/:id/status
 * @desc   Suspend or reactivate workspace
 * @access Private — Admin
 */
router.patch(
  '/:id/status',
  updateWorkspaceStatusValidator,
  validate,
  updateWorkspaceStatus
);

/**
 * @route  DELETE /api/workspaces/:id
 * @desc   Delete workspace (blocked if it has agents or customers)
 * @access Private — Admin
 */
router.delete('/:id', deleteWorkspace);

export default router;
