import express from 'express';
import { createMeg, getAkData } from '../controllers/akController.js';


const akRouter = express.Router();

akRouter.get('/get', getAkData);
akRouter.post('/msg/create', createMeg);




export default akRouter;