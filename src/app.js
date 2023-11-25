const express = require('express');
const AuthRoutes = require('./routes/auth.routes');
const UserRoutes = require('./routes/user.routes');

const app = express();

//configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/auth', AuthRoutes);
app.use('/', UserRoutes);

module.exports = app;
