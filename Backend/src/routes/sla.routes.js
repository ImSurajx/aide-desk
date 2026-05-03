import express from 'express';
import { protect, requireRole } from '../middleware/auth.middleware.js';
import {
  getSLAConfig,
  updateSLAConfig
} from '../controllers/sla.controller.js';

const router = express.Router();

router.use(protect);
router.use(requireRole('admin'));

/**
 * @route  GET /api/sla-config
 * @desc   Read SLA config for current workspace (auto-creates with defaults if missing)
 * @access Private — Admin
 */
router.get('/', getSLAConfig);

/**
 * @route  PUT /api/sla-config
 * @desc   Upsert SLA config for current workspace
 * @access Private — Admin
 */
router.put('/', updateSLAConfig);

export default router;
