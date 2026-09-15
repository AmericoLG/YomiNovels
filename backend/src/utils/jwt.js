const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'yomi_secret_key_change_in_production';

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
