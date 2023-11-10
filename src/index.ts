import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/product"
const PORT = process.env.PORT || 3000;
const app = express();
require('./db')
app.use(cors());
app.use(router)
app.listen(PORT, ()=> console.log(`Listening port ${PORT}`))








//const express = require('express')
//const app = express();
//require('./db')
//app.use(require('./routes/index.routes'))
//app.listen(3000)
