const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
// import express from "express";
//const path = require("path");
// import path from "path";
const router = require("./appapi.js");
// import router from "./appapi.mjs";
const app = express();
app.use(express.static("./views"));
app.use("/find", router);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
