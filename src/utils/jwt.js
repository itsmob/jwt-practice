const jwt = require('jsonwebtoken');
const { SECRECT } = require('../config');

const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRECT, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });
};

const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRECT, (error, payload) => {
      if (error) reject(error);
      resolve(payload);
    });
  });
};

module.exports = { createToken, decodeToken };
