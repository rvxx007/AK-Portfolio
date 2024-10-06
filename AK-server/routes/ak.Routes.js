import express from "express";
import { akCreateServ, akReadServ } from "../controller/ak.Controllers.js";

const akRouter = express.Router();

akRouter.get('/get/ak',akReadServ);
akRouter.post('/post/create',akCreateServ);

export default akRouter