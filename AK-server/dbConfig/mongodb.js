import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const mdbURL = process.env.MONGODB_URI;

// setup mongoDB Connection
mongoose.connect(mdbURL);

// get the Default connection
// mongoose maintain a default Connection object representig the MongoDB connection.
const db = mongoose.connection;
db.on('connected', ()=>{
    console.log('MongoDB Connection Successful');
    
});

db.on('error', (error)=>{
    console.error('Connection Error To the DtaBase');
    
});

db.on('disconnected',()=>{
    console.log('MongoDB Connection Disconnected');
    
});

export default db;