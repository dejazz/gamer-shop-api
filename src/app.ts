import express from 'express'
import { handleError } from './middlewares/verifyError.middleware'


const app = express()

app.use(handleError)
