const express = require('express');
const { port } = require('./config');
const initApp = require('./loaders');

const app = express();
initApp(app);

app.listen(port, () => {
  console.log(`Server listing at ${port}`);
});