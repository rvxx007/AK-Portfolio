import multer from "multer";
import { AK } from "../Models/akModel.js"
import { Skill } from "../Models/skillModel.js";
import { Tool } from "../Models/toolModel.js";
import { Project } from "../Models/projectModel.js";
import { Contact } from "../Models/contactModel.js";
import {Mern} from "../Models/mernModel.js"
import { Msg } from "../Models/msgModel.js";

// const createAkData = async(req, res)=>{
//    try {
        
//     const {name,email,ph,img,logo,about,initials} = req.body;

//     if(!name && !email && !ph && !img && logo && about && initials){
//         res.status(400).json({
//             success:false,
//             msg:"Bad Request : All Feilds Are Required"
//         })
//     }
    
//      const ak = new AK({
//         "name": "Akash kawale",
//         "email": "akashkawle0@gmail.com",
//         "ph": 939577131,
//         "img": "/img/ak.png",
//         "logo": "/img/logo.png",
//         "about": "I was born in Nagpur, Maharashtra, and currently live in Hydrabad, Telangana. My journey into frontend / backend / mernstack development began in 2023, and since then, I’ve fallen in love with everything related to the MERN stack (MongoDB, Express.js, React, Node.js).",
//         "initials": "AK",
//         "intro": {
//             "headTitle": "Hello , I'm a FullStack & MernStack Developer",
//             "headSub": "Im a dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise lies in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I&apos;m passionate about crafting intuitive user interfaces and efficient server-side logic."
//         },
        
//     });

//     const result = await ak.save();

//     if(!result){
//         res.status(401).json({
//             success: false,
//             msg:"Something was wrong",
//         });
//     }

//     res.status(200).json({
//         success:true,
//         msg:"Added Successfully",
//         data:result
//     });
//    } catch (error) {
//     res.status(500).json({
//         success:true,
//         msg:"Server Error",
//         data:error.message
//     });
//    }
// }

const getAkData = async(req, res)=>{

    const akObj = await AK.find();
    const skillsObj = await Skill.find();
    const toolsObj =await Tool.find();
    const proObj = await Project.find();
    const contObj = await Contact.find();
    const mernObj = await Mern.find();

    
    if( akObj.length === 0 
        && skillsObj.length === 0 
        && toolsObj.length === 0 
        && proObj.length === 0 
        && contObj.length === 0
        && mernObj.length === 0 
    )
        {
        return res.status(404).json({
            success:false,
            msg:"Data Not Found"
        })
    }

    const result ={
        ak:akObj[0],
        merns:mernObj,
        skills:skillsObj,
        tools:toolsObj,
        projects:proObj,
        contacts:contObj
    }

    res.status(201).json({
        success:true,
        msg:"Found Data",
        data: result
    })
}

const createMeg = async(req , res)=>{
        try {      
        
            const { name,email,ph,msg } = req.body.data;
            if(!name && !email && !ph && !msg){
                return res.status(404).json({
                    success:false,
                    msg: "Parameter is Missing : all feilds Are Required"
                })
            }

            const msgObj = new Msg({ name,email,ph,msg }).save();
            const result = await msgObj;
            
            if(!result){
                res.status(500).json({
                    success:false,
                    msg:"somthing was Wrong"
                })
            }

            res.status(200).json({
                success:true,
                msg:"Message Sent Successfully",
            });
            
        } catch (error) {
            res.status(500).json({
                success:false,
                msg:"server unavilable",
                error
            })
        }
}



export { getAkData ,createMeg}