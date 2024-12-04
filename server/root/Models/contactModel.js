import mongoose from "mongoose";


const contactSchema = mongoose.Schema({
    title:{type:String, requied:true},
    link:{type:String, requied:true},
    icon:{type:String, requied:true}
});

export const Contact = mongoose.model('contacts',contactSchema);