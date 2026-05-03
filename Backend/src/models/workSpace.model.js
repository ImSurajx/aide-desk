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
      unique: true,
      lowercase: true,
      trim: true
    },

    // The company this workspace belongs to
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: [true, 'Company is required']
    },

    // Admin who created this workspace
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'admin',
      required: [true, 'Workspace owner is required']
    },

    description: {
      type: String,
      trim: true,
      maxlength: [200, 'Description cannot exceed 200 characters'],
      default: ''
    },

    status: {
      type: String,
      enum: ['active', 'suspended', 'cancelled'],
      default: 'active'
    },

    branding: {
      logo: { type: String, default: '' },
      primaryColor: { type: String, default: '#2563eb' }
    },

    usage: {
      ticketsThisMonth: { type: Number, default: 0 },
      messagesThisMonth: { type: Number, default: 0 },
      storageUsedMB: { type: Number, default: 0 }
    },

    resetDate: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

const workspaceModel = mongoose.model('workspace', workspaceSchema);

export default workspaceModel;
