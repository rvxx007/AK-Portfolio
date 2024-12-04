import mongoose from "mongoose";

const akSchema =new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required:true},
    ph:{type:Number, required:true},
    img:{type:String,required: true},
    logo:{type:String,required: true},
    about:{type:String,required: true},
    initials:{type:String,required: true},
    intro:{
        headTitle:{type:String,required: true},
        headSub:{type:String,required: true},
    }
},{timestamps:true});

export const AK = mongoose.model('ak',akSchema);