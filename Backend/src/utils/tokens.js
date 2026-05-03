import { config } from '../config/config.js';
import jwt from 'jsonwebtoken';

// Generates the main auth access token and sets it in an httpOnly cookie.
// workspaceId is null for admins (they float across workspaces via x-workspace-id header).
export const generateToken = (res, userId, email, role, companyId = null, workspaceId = null) => {
  const token = jwt.sign(
    { userId, email, role, companyId, workspaceId },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRE || '5d' }
  );
  setTokenInCookies(res, token);
  return token;
};

export const regenerateToken = (res, userId, email, role, companyId, workspaceId = null) => {
  const token = jwt.sign(
    { userId, email, role, companyId, workspaceId },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRE || '5d' }
  );
  setTokenInCookies(res, token);
  return token;
};

// Short-lived token (15 min) used only for password reset links — never stored in cookies
export const generateResetToken = userId => {
  return jwt.sign({ userId, purpose: 'password-reset' }, config.JWT_SECRET, {
    expiresIn: '15m'
  });
};

const setTokenInCookies = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  });
};
