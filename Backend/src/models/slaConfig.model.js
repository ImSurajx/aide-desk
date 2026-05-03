import mongoose from 'mongoose';

const slaConfigSchema = new mongoose.Schema(
  {
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'workspace',
      required: true,
      unique: true
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: true
    },

    firstResponseHours: {
      critical: { type: Number, default: 1 },
      high: { type: Number, default: 4 },
      medium: { type: Number, default: 8 },
      low: { type: Number, default: 24 }
    },

    resolutionHours: {
      critical: { type: Number, default: 4 },
      high: { type: Number, default: 24 },
      medium: { type: Number, default: 72 },
      low: { type: Number, default: 168 }
    },

    businessHoursOnly: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const slaConfigModel = mongoose.model('slaConfig', slaConfigSchema);

export default slaConfigModel;
