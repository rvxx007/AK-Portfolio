import express from 'express';
import { createContact, createProject, createTools, 
     deleteContact, 
     deleteProject, 
     deleteSkills, 
     deleteTools, 
     getContact, getProject, getSkills, getTools, skillsCreate, 
     updateContact, 
     updateProject, 
     updateSkills,
     updateTools} from '../controllers/adminController.js';
import adminAuth from '../Middlewares/adminAuth.js';

const adminRouter = express.Router();

adminRouter.post('/skills/create',adminAuth,skillsCreate);
adminRouter.post("/contact/create",adminAuth, createContact);
adminRouter.post("/tool/create",adminAuth, createTools);
adminRouter.post("/project/create",adminAuth, createProject);

adminRouter.get('/skills/get',getSkills);
adminRouter.get("/contact/get", getContact);
adminRouter.get("/tool/get", getTools);
adminRouter.get("/project/get", getProject);

adminRouter.put('/skills/update',adminAuth,updateSkills);
adminRouter.put("/contact/update",adminAuth, updateContact);
adminRouter.put("/tool/update",adminAuth, updateTools);
adminRouter.put("/project/update",adminAuth, updateProject);

adminRouter.delete('/skills/delete',adminAuth,deleteSkills);
adminRouter.delete("/contact/delete",adminAuth, deleteContact);
adminRouter.delete("/tool/delete",adminAuth, deleteTools);
adminRouter.delete("/project/delete",adminAuth, deleteProject);

export default adminRouter