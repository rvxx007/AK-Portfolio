import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
name:{
    type: String,
    required:true,
},
email:{
    type: String,
    required: true,
    lowercase: true,
},
phone: {
    type: Number,
    required:true,
},
descp:{
    type:String,
    required: true,
}
},{timestamps:true});

export const Contact = mongoose.model('Contact', contactSchema)