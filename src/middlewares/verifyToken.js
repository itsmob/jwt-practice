const User = require('../models/User');
const { decodeToken } = require('../utils/jwt');

const validateToken = async (req, res, next) => {
  try {
    //get token from headers
    const token = req.headers['x-access-token'];
    if (!token) return res.status(400).json({ message: 'No token provided', auth: false });
    //decode token
    const { userId } = await decodeToken(token);
    // look for the user
    const userFound = User.findOne({ userId });
    if (!userFound) return res.status(400).json({ message: 'invalid token', auth: false });
    //The token is valid
    req.user = userFound;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "The server's having a hard time, try later", error });
  }
};

module.exports = { validateToken };
