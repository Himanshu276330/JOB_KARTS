const express = require("express");
// import express from "express";
const path = require("path");
// import path from "path";
const router = require("./appapi.js");
// import router from "./appapi.mjs";
const app = express();

app.use(express.static("./views"));
app.use("/find", router);

app.listen(5050);
