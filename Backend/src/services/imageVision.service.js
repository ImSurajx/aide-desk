import { GoogleGenAI } from '@google/genai';
import { config } from '../config/config.js';

const genai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });

// Analyze a customer screenshot/image in support context. Returns plain text
// description ready to be injected into the Copilot system prompt.
export const analyzeImage = async (imageBuffer, mimeType, userMessage) => {
  const base64 = imageBuffer.toString('base64');

  const result = await genai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        role: 'user',
        parts: [
          { inlineData: { mimeType, data: base64 } },
          {
            text: `The customer sent this image in a support chat with the message: "${userMessage}"

            Analyze the image and describe:
            1. What the image shows (UI screenshot, error message, photo of hardware, etc.)
            2. Any visible error messages, codes, or stack traces — quote them exactly
            3. What application or system is visible
            4. What the customer's problem appears to be based on the image
            
            Respond in plain text, max 200 words. Be specific — exact error text matters.`
          }
        ]
      }
    ]
  });

  return result.text;
};
