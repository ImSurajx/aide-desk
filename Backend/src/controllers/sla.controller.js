import slaConfigModel from '../models/slaConfig.model.js';
import { HTTP_STATUS } from '../config/constants.js';
import { AppError, asyncHandler } from '../utils/errorHandler.js';

const DEFAULT_SLA = {
  firstResponseHours: { critical: 1, high: 4, medium: 8, low: 24 },
  resolutionHours: { critical: 4, high: 24, medium: 72, low: 168 },
  businessHoursOnly: false
};

// ============================================
// GET /api/sla-config
// Admin reads workspace SLA. Returns defaults if not yet customized.
// ============================================
export const getSLAConfig = asyncHandler(async (req, res) => {
  if (!req.workspaceId) {
    throw new AppError('workspaceId required', HTTP_STATUS.BAD_REQUEST);
  }

  let config = await slaConfigModel
    .findOne({ workspaceId: req.workspaceId })
    .lean();

  if (!config) {
    config = await slaConfigModel.create({
      workspaceId: req.workspaceId,
      companyId: req.companyId,
      ...DEFAULT_SLA
    });
  }

  res.status(HTTP_STATUS.OK).json({ success: true, data: config });
});

// ============================================
// PUT /api/sla-config
// Admin updates workspace SLA. Upserts on first call.
// ============================================
export const updateSLAConfig = asyncHandler(async (req, res) => {
  if (!req.workspaceId) {
    throw new AppError('workspaceId required', HTTP_STATUS.BAD_REQUEST);
  }

  const { firstResponseHours, resolutionHours, businessHoursOnly } = req.body;
  const update = {};
  if (firstResponseHours) update.firstResponseHours = firstResponseHours;
  if (resolutionHours) update.resolutionHours = resolutionHours;
  if (businessHoursOnly !== undefined)
    update.businessHoursOnly = !!businessHoursOnly;

  const config = await slaConfigModel.findOneAndUpdate(
    { workspaceId: req.workspaceId },
    {
      $set: update,
      $setOnInsert: {
        workspaceId: req.workspaceId,
        companyId: req.companyId
      }
    },
    { new: true, upsert: true, runValidators: true }
  );

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: 'SLA configuration updated',
    data: config
  });
});
