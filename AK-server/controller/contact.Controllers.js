import { resFunc,errFunc, catchErrFunc } from "../handlers/req-res.js"
import { Contact } from "../model/contact.Model.js"


const readContactServ = async(req, res)=>{
    try {
     
        const result = await Contact.find();
        resFunc(res,200,true,"Success", result);

    } catch (err) {
        console.log(err);
        
        errFunc(res,500,"Server Unreachable",err)
    }
}

const createContactServ = async(req, res)=>{
    try {
        

        const saveData = new Contact(req.body).save();
        const result = await saveData
        console.log(result);
        
        if(!result){
            return resFunc(res,400, false,"Server Error, Unable to Save Data",null);
        }else{
            return resFunc(res,200, true,"Data Saved Successfully",null);
        }

    } catch (error) {
       catchErrFunc(res, error);
    }
}

export { readContactServ, createContactServ }