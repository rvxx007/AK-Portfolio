import mongoose from 'mongoose'
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validatePhoneNumber = function(ph) {
    var phoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
    return phoneNumberRegex.test(ph)
};
const msgSchema = mongoose.Schema({
    name:{type:String, 
        required:true},
    email:{type:String,
        lowercase:true,
        validate:[validateEmail,"Please fill a valid email address"]},
    ph:{type:Number, 
        validate: [validatePhoneNumber,"Invalid phone number."],
        required:true},
    msg:{type:String,trim:true, required:true}
});

export const Msg = mongoose.model('Msg', msgSchema);