require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth_route");
const conectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

conectDb().then(() => {
  app.listen(PORT, () => {
    console.log(` server is running in port ${PORT}`);
  });
});
