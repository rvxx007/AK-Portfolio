import { AK } from "../Models/akModel.js";
import { Contact } from "../Models/contactModel.js";
import { Mern } from "../Models/mernModel.js";
import { Project } from "../Models/projectModel.js";
import { Skill } from "../Models/skillModel.js";
import { Tool } from "../Models/toolModel.js";

async function checkDuplicate(req,res,Model){
    const {title} = req.body;

    if(!title){
        return res.status(404).json({
            success:false,
            msg:"All Parameter is Required"
        });
    }
    const isPresent = await Model.find({title:title})
    if(isPresent.length>0){
        return res.status(409).json({
            success: false,
            msg:"Duplicate Entry , Data Already Present"
        });
    }
}

const skillsCreate = async(req , res)=>{
   const { title} = req.body

    await checkDuplicate(req,res, Skill)
    
    const skill = new Skill({
        "icon": "/upload/skills/java.svg",
          "title": "Java",
          "skillType":"lang"
        });
        const result = await skill.save();
   
    res.status(200).json({
        status:"done",
        data: result,
        akUpdate:akUpdate
    })
}

const mernsCreate = async(req , res)=>{
    const { title} = req.body
 
     await checkDuplicate(req,res, Mern)
     
     const mern = new Mern({
         "icon": "/upload/merns/java.svg",
           "title": "Java",
           "skillType":"lang"
         });
         const result = await mern.save();
    
     res.status(200).json({
         status:"done",
         data: result,
         akUpdate:akUpdate
     })
 }


const createContact = async(req, res) =>{
    
    await checkDuplicate(req,res, Contact)

    const contact = new Contact({
        "icon": "/upload/contact/ph.svg",
        "title": "Phone",
        "link": ""
    });
    const result = await contact.save();
    
    console.log(result);
    res.status(200).json({
        status:"done",
        data:result
    })
}

const createTools = async(req, res) =>{
    
    await checkDuplicate(req,res, Tool);

    const tool = new Tool({
        "icon": "/upload/tools/railway.svg",
        "title": "Railway",
        "toolType":"dhPlatform"
    });
    const result = await tool.save();
    
    console.log(result);
    res.status(200).json({
        status:"done",
        data:result
    })
}

const createProject = async(req, res) =>{
    
    await checkDuplicate(req,res,Project);

    const project = new Project({
        "icon": "/upload/project/vercel.svg",
        "title": "MyAnimeList API",
        "desc":"this api provice live data from myAnimeList, e.g. like top anime,top news,...",
        "gitlink":"lsdfjsdk",
        "livelink":"dfkksdfldsg"
    });
    const result = await project.save();
    
    console.log(result);
    res.status(200).json({
        status:"done",
        data:result
    })
}
    const getSkills = async(req, res)=>{
        const result = await Skill.find();

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }

        console.log(result);
        
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }


    const getMerns = async(req, res)=>{
        const result = await Mern.find();

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }

    const getProject = async(req, res)=>{
        const result = Project.find();

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const getTools = async(req, res)=>{
        const result = Tool.find();

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const getContact = async(req, res)=>{
        const result = Contact.find();

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }

    const updateSkills = async(req, res)=>{
        const result = await Skill.updateOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }

        console.log(result);
    
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }

    const updateMerns = async(req, res)=>{
        const result = await Mern.updateOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }

        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }

    const updateProject = async(req, res)=>{
        const result = Project.updateOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const updateTools = async(req, res)=>{
        const result = Tool.updateOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const updateContact = async(req, res)=>{
        const result = Contact.updateOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }


    const deleteSkills = async(req, res)=>{
        const result = await Skill.deleteOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }

        console.log(result);
    
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }


    const deleteMerns = async(req, res)=>{
        const result = await Mern.deleteOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })
    }

    const deleteProject = async(req, res)=>{
        const result = Project.deleteOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const deleteTools = async(req, res)=>{
        const result = Tool.deleteOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })

    }
    const deleteContact = async(req, res)=>{
        const result = Contact.deleteOne(req.body);

        if(!result) {
            res.status(404).json({
                status:"false",
                msg:"Data not Found"
            });
        }
        res.status(200).json({
            status:true,
            msg:"Success",
            data:result
            })
    }

export {
    skillsCreate,mernsCreate, createContact,createTools,createProject,
    getSkills,getMerns, getContact, getTools, getProject,
    updateSkills,updateMerns, updateContact, updateTools, updateProject,
    deleteSkills,deleteMerns, deleteContact, deleteTools, deleteProject
};  //export all functions