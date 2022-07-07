import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import { handleError } from './middlewares/verifyError.middleware'
import { appRoutes } from "./routes"


const app = express()
app.use(express.json())
appRoutes(app)
app.use(handleError)


export default app 