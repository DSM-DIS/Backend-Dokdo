const express = require('express');
const app = express();

const { SERVER_PORT } = require('./config');
const initApp = require('./loaders');

initApp(app);

app.listen(SERVER_PORT, () => {
  console.log(`Server listing at ${SERVER_PORT}`);
});