import { GoogleGenAI } from '@google/genai';
import { config } from '../config/config.js';

const genai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });

// Upload PDF buffer to Gemini Files API and extract a support-focused summary.
// fileUri reusable for 48h within follow-up prompts.
export const uploadPDFAndExtract = async (
  fileBuffer,
  originalName = 'document.pdf'
) => {
  const blob = new Blob([fileBuffer], { type: 'application/pdf' });
  const uploaded = await genai.files.upload({
    file: blob,
    config: { mimeType: 'application/pdf', displayName: originalName }
  });

  // Poll until ACTIVE (usually <5s)
  let fileState = await genai.files.get({ name: uploaded.name });
  let attempts = 0;
  while (fileState.state === 'PROCESSING' && attempts < 15) {
    await new Promise(r => setTimeout(r, 2000));
    fileState = await genai.files.get({ name: uploaded.name });
    attempts++;
  }

  if (fileState.state !== 'ACTIVE') {
    throw new Error(`PDF processing failed: ${fileState.state}`);
  }

  const result = await genai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        role: 'user',
        parts: [
          {
            fileData: {
              fileUri: fileState.uri,
              mimeType: 'application/pdf'
            }
          },
          {
            text: `Extract key information from this document relevant for a customer support context.
Specifically:
- What product/service does this relate to?
- What error messages, codes, or issues are mentioned?
- What steps or configurations are described?
- What is the user trying to accomplish?

Be concise. Output as plain text, max 300 words.`
          }
        ]
      }
    ]
  });

  return {
    fileUri: fileState.uri,
    summary: result.text,
    fileName: originalName
  };
};

export const buildFilePart = (fileUri, mimeType = 'application/pdf') => ({
  fileData: { fileUri, mimeType }
});
