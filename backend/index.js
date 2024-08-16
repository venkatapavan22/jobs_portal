import express from 'express'
import dotenv from 'dotenv'
import connection from './database/db.js'
import userRoutes from './routes/userRoutes.js'
import jobRoutes from './routes/jobsRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user',userRoutes)
app.use("/jobs",jobRoutes)
app.use('/application',applicationRoutes)

connection()
app.listen(process.env.port,()=>{
    console.log(`port is running at ${process.env.port}`)
})


app.get("/",(req,res)=>{
    res.send("shetty")
})

