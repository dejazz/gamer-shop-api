import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import { handleError } from './middlewares/verifyError.middleware'
import { appRoutes } from "./routes"

const path = require("node:path");
const engines = require("consolidate");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.engine("ejs", engines.ejs);
app.set("views", path.join(__dirname, "./src/app/views"));
app.set("view engine", "ejs");
appRoutes(app)
app.use(handleError)


export default app 