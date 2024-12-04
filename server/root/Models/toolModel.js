import mongoose from "mongoose";


const toolSchema = mongoose.Schema({
    icon:{type: String, required:true},
    title:{type: String, required:true},
    toolType:{type: String, required:true}
});

export const Tool = mongoose.model('tools', toolSchema);