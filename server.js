const app = require("./index");
const dbConnect = require("./utils/db");
require("dotenv").config();

dbConnect();
// const PORT = process.env.PORT || 4500;
const express = require('express')
const PORT = process.env.PORT || 4000;

app.listen(PORT);
