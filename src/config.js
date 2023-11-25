const { config } = require('dotenv');
config();

const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/jwt-local-db';

const PORT = process.env.PORT || 3000;

const SECRECT = process.env.SECRECT || 'shhh, super secret';

module.exports = { DB_URI, PORT, SECRECT };
