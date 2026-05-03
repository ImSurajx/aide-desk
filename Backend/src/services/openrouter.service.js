import OpenAI from 'openai';
import { config } from '../config/config.js';

export const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: config.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': config.FRONTEND_URL,
    'X-Title': 'AideDesk Copilot'
  }
});

// Single point for all OpenRouter calls. Retries once on 429.
export const callOpenRouter = async ({
  model,
  messages,
  maxTokens = 800,
  jsonMode = false
}) => {
  const options = { model, max_tokens: maxTokens, messages };
  if (jsonMode) options.response_format = { type: 'json_object' };

  try {
    const res = await openrouter.chat.completions.create(options);
    return res.choices[0].message.content;
  } catch (err) {
    if (err?.status === 429) {
      await new Promise(r => setTimeout(r, 5000));
      const res = await openrouter.chat.completions.create(options);
      return res.choices[0].message.content;
    }
    throw err;
  }
};
