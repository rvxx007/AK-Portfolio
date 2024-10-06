import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';
import {fileURLToPath} from 'url'
import path from 'path'
import bodyParser from 'body-parser';
import db from './dbConfig/mongodb.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(cors({path:".env"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'))
})

// Ak Router Import Setup
import akRouter from './routes/ak.Routes.js';
import contactRouter from './routes/contact.Routes.js';

// Middleware Routes Setup 
app.use('/api/v1/ak',akRouter);
app.use('/api/v1/contact',contactRouter )

const PORT = process.env.PORT || 5550;

app.listen(PORT,()=>{
    console.log('Server Running On Port = '+PORT);
})