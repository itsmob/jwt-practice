const { Router } = require('express');
const { createUser, login } = require('../controllers/auth.controllers');

const router = Router();

//create new user account
router.post('/register', createUser);

//login
router.post('/login', login);

module.exports = router;
