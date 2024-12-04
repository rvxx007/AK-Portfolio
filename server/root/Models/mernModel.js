import mongoose from 'mongoose'

const mernSchema = mongoose.Schema({
    title:{type:String, required:true},
    icon:{type:String, required:true},
    tc:{type:String, required:true},
    bc:{type:String, required:true}

});

export const Mern = mongoose.model('Mern', mernSchema);