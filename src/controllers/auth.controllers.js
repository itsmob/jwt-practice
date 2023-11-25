const User = require('../models/User');
const { createToken } = require('../utils/jwt');

//create new user account
const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: 'The email is being used already',
      });

    const newUser = new User({
      email,
      password,
    });

    newUser.password = await newUser.encryptPassword(newUser.password);
    const userSaved = await newUser.save();

    const token = await createToken({ userId: userSaved._id });

    return res.status(200).json({ message: 'User Created', auth: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server's having a hard time, try later", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: 'Wrong email' });

    //check password
    const validPassword = await userFound.comparePassword(password);
    if (!validPassword) return res.status(400).json({ message: 'Wrong passaword' });

    const token = await createToken({ userId: userFound._id });

    return res.status(200).json({ auth: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server's having a hard time, try later", error });
  }
};

module.exports = { createUser, login };
