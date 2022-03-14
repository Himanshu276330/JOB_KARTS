// import express from "express";
const express = require("express");
const router = express.Router();
// import path from "path";
const path = require("path");
const axios = require("axios");
// import fetch from "node-fetch";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
//require("dotenv/config");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
// const fetch = require("node-fetch");
const ID = process.env.API_ID;
const PASS = process.env.API_KEY;

router.get("/categ/:cc", (req, res) => {
  const countryCode = req.params.cc;
  axios
    .get(
      `https://api.adzuna.com/v1/api/jobs/${countryCode}/categories?app_id=${ID}&app_key=${PASS}`
    )
    .then((response) => {
      if (response) {
        res.status(200).json(response.data);
      } else {
        res.status(404).json({ status: 404 });
      }
    })
    .catch((err) => {
      res.status(404).json({ status: 404 });
      console.log(err);
    });
  // console.log(data);
});

router.get("/jobs/:cc/:p", (req, res) => {
  const countryCode = req.params.cc;
  const p = req.params.p;
  var queries = req.query;
  let url1 = `https://api.adzuna.com/v1/api/jobs/${countryCode}/search/${p}?app_id=${ID}&app_key=${PASS}`;
  let params = "";
  let keys = Object.keys(queries);
  let values = Object.values(queries);
  for (let i in keys) {
    params += `&${keys[i]}=${values[i]}`;
  }
  axios
    .get(url1 + params)
    .then((response) => {
      if (response) {
        res.status(200).json(response.data);
      } else {
        res.status(404).json({ status: 404 });
      }
    })
    .catch((err) => {
      res.status(404).json({ status: 404 });
      console.log(err);
    });
});

module.exports = router;
// export default router;
