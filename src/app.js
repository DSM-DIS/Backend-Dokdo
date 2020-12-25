import express from "express";
import { SERVER_PORT } from "./config";
import { initApp } from "./loaders";

const app = express();
initApp(app);

app.listen(SERVER_PORT, () => {
  console.log(`Server listing at ${SERVER_PORT}`);
});