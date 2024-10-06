import mongoose from "mongoose";

const akSchema = mongoose.Schema({
name:{type: String, required:true},
email:{type: String , required: true},
ph:{type: Number, required:true},
img:{type: String, required:true},
logo:{type: String, required:true},
bg: {type: String, required:true},
aboutTitle:{type: String, required:true},
about:{type:String, required:true},
initials:{type:String,required:true},
headTitle:{type: String,required:true},
headSub:{type: String, required:true},
skills:{
    type:[
        {
            idBlock:{type:String, required:true},
            headTitle:{type:String, required:true},
            Obj:[
                {
                    img:{type: String, required:true},
                    title: {type:String, required:true},
                }
            ]
        }
    ]
},
tools:{
    type:[
        {
            idBlock:{type: String, required:true},
            headTitle:{type:String, required:true},
            Obj:[
                {
                    img:{type:String, required:true},
                    title:{type:String, required: true},
                    url:{type: String, required:false}
                }
            ]
        }
    ]
},
serviceObj:{
    type:[
        {
            idblock:{type: String},
            headTitle:{type:String ,required: true},
            description:{type:String, required: true},
            Obj:[
                {
                    img:{type:String, required:true},
                    title:{type: String, required: true}
                }
            ]
        }
    ]
}

},{timestamps: true})

export const AK = mongoose.model('AK', akSchema)

