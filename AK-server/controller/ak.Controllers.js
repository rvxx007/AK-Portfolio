import { catchErrFunc, resFunc } from "../handlers/req-res.js"
import { AK } from "../model/ak.Model.js";

const akReadServ = async(req, res)=>{

    try {
        
        const akObj = await AK.find()
        resFunc(res, 200,true,"success",akObj);

    } catch (error) {
        catchErrFunc(res,error);
    }
}

const akCreateServ = async(req, res)=>{
    try {
       const akObj = new AK(req.body).save();
       const result = await akObj;
       console.log(result);
       
       if(!result){
        resFunc(res, 400,false,"Failed to create",null);
       }else{
        resFunc(res, 200,true,"Success",result);
       }
    } catch (error) {
        catchErrFunc(res, error);
    }
}

export {akReadServ,akCreateServ }