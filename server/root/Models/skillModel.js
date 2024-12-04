import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    title:{type:String, required: true},
    icon:{type:String, required: true},
    skillType:{type:String, required: true}
});

function getIdList(){
    return mongoose.Schema.Types.ObjectId
}

export const Skill = mongoose.model('skills', skillSchema);
