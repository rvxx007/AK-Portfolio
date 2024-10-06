import express from 'express';
import { createContactServ, readContactServ } from '../controller/contact.Controllers.js';

const contactRouter = express.Router();

contactRouter.get('/get/all',readContactServ );
contactRouter.post('/post/create', createContactServ);

export default contactRouter