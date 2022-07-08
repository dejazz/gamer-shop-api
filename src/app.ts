import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import { handleError } from './middlewares/verifyError.middleware'
import { appRoutes } from "./routes"
import cors from "cors"
import * as fs from "fs"
import * as path from "path"


const engines = require("consolidate");
const mercadopago = require ('mercadopago');

mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static("../../client"));
app.engine("ejs", engines.ejs);
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

appRoutes(app)
app.use(handleError)


export default app 