import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Workspace name is required'],
      trim: true,
      maxlength: [50, 'Workspace name cannot exceed 50 characters']
    },

    slug: {
      type: String,
      required: [true, 'Workspace slug is required'],
      unique: [true, 'Workspace slug must be unique'],
      lowercase: true,
      trim: true
    },

    // Admin who created this workspace
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'admin',
      required: [true, 'Workspace owner is required']
    },

    plan: {
      type: String,
      enum: ['free', 'pro', 'enterprise'],
      default: 'free'
    },

    status: {
      type: String,
      enum: ['active', 'suspended', 'cancelled'],
      default: 'active'
    },

    // Per-tenant branding for the multi-tenant demo
    branding: {
      logo: { type: String, default: '' },
      primaryColor: { type: String, default: '#2563eb' }
    },

    usage: {
      ticketsThisMonth: { type: Number, default: 0 },
      messagesThisMonth: { type: Number, default: 0 },
      storageUsedMB: { type: Number, default: 0 }
    },

    // Date when monthly usage counters reset
    resetDate: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

const workspaceModel = mongoose.model('workspace', workspaceSchema);

export default workspaceModel;
