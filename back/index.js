import express from 'express'
import cors from 'cors'
import userRoutes from './routes/signupRoute.js'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors({
    origin : '*'
}))
mongoose.connect('mongodb+srv://grabachakib555:uqen48vnYo37R6yH@prodigycluster.ywqzy.mongodb.net/ProdigyChallenge01',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database conected')
}).catch((err) => {
    console.log(err)})

app.use('/', userRoutes)

app.listen(3000, () => {
    console.log("server is up")
})