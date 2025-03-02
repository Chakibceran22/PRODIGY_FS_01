import express from 'express'
import cors from 'cors'
import userRoutes from './routes/signupRoute.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import mongoose from 'mongoose'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin : '*'
}))
connectDB()

app.use('/', userRoutes)

app.listen(3000, () => {
    console.log("server is up")
})