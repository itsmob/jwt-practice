const { connect } = require('mongoose');
const { DB_URI } = require('./config.js');

(async () => {
  try {
    const db = await connect(DB_URI);
    console.log('connected to db:', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
