import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    icon:{type:String , required:true},
    title:{type:String , required:true},
    desc:{type:String, required:true},
    gitlink:{type:String, required:true},
    livelink:{type:String, required:true}
});

export const Project = mongoose.model('projects', projectSchema);