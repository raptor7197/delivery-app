import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './configs/db.js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 4000
const allowedOrigins = ['http://localhost:5173/']

// middle wares
app.use(express.json())
app.use(cookieParser())

app.use(cors({origin:allowedOrigins ,credentials:true}));

app.get('/',(req,res) =>res.send('API started'));


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})