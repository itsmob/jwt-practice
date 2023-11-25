const { Router } = require('express');
const { validateToken } = require('../middlewares/verifyToken');

const router = Router();

//all the routes here are protected routes
router.get('/dashboard', validateToken, (req, res) => {
  res.json('me');
});

module.exports = router;
