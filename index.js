import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/DBConfig.js'
import empRouter from './Routers/employeeRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
// const PORT = 8000
const port = process.env.PORT
connectDB();

app.use('/api', empRouter)

app.listen(port, () => {
    console.log("App is running the port =", port);
})
