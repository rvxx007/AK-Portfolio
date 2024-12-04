import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({path:".env"});
import mdb from './root/config/mdb.js';
import akRouter from './root/routes/akRoute.js';

import cors from 'cors';
import multer from 'multer';
import adminRouter from './root/routes/adminRoute.js';
const PORT =  process.env.PORT || 2222 ;

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file , cb)=>{
        cb(null , './public/upload/'+req.folder);
    },
    filename: (req, file, cb) => {
        cb(null, "img-"+Date.now() + '-' + file.originalname)
    }
});

//Multer Engine Setup
const upload = multer({ storage });

app.post('/upload',upload.single('image'),async(req, res)=>{
            try {
                const fileName = req.file.filename;
            const mimeType = req.file.mimetype.split('/').at(0);

            if(mimeType !== 'image'){
                res.status(401).json({
                    success:false,
                    msg:"File Format is Wrong, Please Select Images only."
                })
            }
                      
            res.status(200).json({
                success: true,
                msg:"Uploaded Successfully",
                filePath:"/upload/"+req.folder+fileName
            });
            } catch (error) {
               res.status(501).json({
                success:false,
                msg:"Server Error",
                error
               });
            }
    });


    app.get('/',(req, res)=>{
        res.status(200).send('Hello');
    })
    
    app.use('/api/v1/ak',akRouter);
    app.use('/api/v1/admin',adminRouter);

app.listen(PORT,()=>{
    console.log('Server is Running on the PORT = '+PORT);
    
})