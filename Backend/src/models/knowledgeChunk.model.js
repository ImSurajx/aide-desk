import mongoose from 'mongoose';

const knowledgeChunkSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
      required: true
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'workspace',
      required: true
    },

    problemSummary: { type: String, required: true },
    resolution: { type: String, default: '' },
    keywords: [{ type: String, lowercase: true }],

    intentLabel: { type: String, default: 'other' },
    sentimentScore: { type: Number, min: 1, max: 5, default: null },
    category: { type: String, default: 'other' },

    source: {
      type: String,
      enum: ['ai_resolved', 'agent_resolved'],
      required: true
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chat',
      default: null
    },
    ticketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ticket',
      default: null
    },
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'agent',
      default: null
    },

    wasHelpful: { type: Boolean, default: null }
  },
  { timestamps: true }
);

knowledgeChunkSchema.index({ workspaceId: 1, keywords: 1 });
knowledgeChunkSchema.index({ workspaceId: 1, intentLabel: 1 });
knowledgeChunkSchema.index({ workspaceId: 1, createdAt: -1 });

const knowledgeChunkModel = mongoose.model(
  'knowledgeChunk',
  knowledgeChunkSchema
);

export default knowledgeChunkModel;
