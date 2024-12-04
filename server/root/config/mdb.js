import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path:'.env'});

mongoose.connect(process.env.MDBURL);


const mdb = mongoose.connection;

mdb.on('connected',()=>{
    console.log('mongodb Connected Successfully');
});

mdb.on('disconnected', ()=>{
    console.log('MongoDB is Disconnected');
});

mdb.on('error',(error)=>{
    console.error('MongoDB Error : '+error);
});

export default mdb;