import { Router } from 'express';
const router = Router();

// ============================================
// Import Validators
// ============================================
import {
  updateCompanyValidator,
  createCompanyValidator
} from '../validator/company.validator.js';

// ============================================
// Import Middlewares
// ============================================
import { protect } from '../middleware/auth.middleware.js';

// ============================================
// Import Controllers
// ============================================
import {
  registerCompanyController,
  getCompanyController,
  updateCompanyController,
  deleteCompanyController,
  getCompanyUsersController,
  getCompanyAgentsController,
  getCompanyTicketsController,
  getCompanyMessagesController
} from '../controllers/company.controller.js';

// ============================================
// ── Admin Routes (register / auth / manage) ─
// ============================================

/**
 * @route   POST /api/company/register
 * @desc    Register a new company (admin only)
 * @access  Private — admin
 */
router.post(
  '/register',
  protect,
  createCompanyValidator,
  registerCompanyController
);

/**
 * @route   GET /api/company/:id
 * @desc    Get a company by ID
 * @access  Private — admin
 */
router.get('/:id', protect, getCompanyController);

/**
 * @route   PUT /api/company/:id
 * @desc    Update company details
 * @access  Private — admin
 */
router.put('/:id', protect, updateCompanyValidator, updateCompanyController);

/**
 * @route   DELETE /api/company/:id
 * @desc    Delete a company
 * @access  Private — admin
 */
router.delete('/:id', protect, deleteCompanyController);

// ============================================
// ── Company Data Routes (users / agents / tickets / messages)
// ── All scoped to a specific company by :companyId
// ============================================

/**
 * @route   GET /api/company/:companyId/users
 * @desc    Get all users belonging to a company
 * @access  Private — admin
 */
router.get('/:companyId/users', protect, getCompanyUsersController);

/**
 * @route   GET /api/company/:companyId/agents
 * @desc    Get all agents assigned to a company
 * @access  Private — admin
 */
router.get('/:companyId/agents', protect, getCompanyAgentsController);

/**
 * @route   GET /api/company/:companyId/tickets
 * @desc    Get all tickets raised under a company
 * @access  Private — admin
 */
router.get('/:companyId/tickets', protect, getCompanyTicketsController);

/**
 * @route   GET /api/company/:companyId/messages
 * @desc    Get all messages under a company
 * @access  Private — admin
 */
router.get('/:companyId/messages', protect, getCompanyMessagesController);

// ============================================
// Export Router
// ============================================
export default router;
