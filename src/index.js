const app = require('./app');
const { PORT } = require('./config');
require('./db');

async function init() {
  await app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
}
init();
