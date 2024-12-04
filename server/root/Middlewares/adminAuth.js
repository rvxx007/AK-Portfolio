import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const adminAuth = (req, res, next)=>{

    const id = req.query;

    if(!id){
        res.status(401).json({
            success:false,
            msg:"Unauthorized Access: No id Provided"
        });
    }

    if(id === process.env.ID_FOR_VERIFICATION){
        next();
    }

}

export default adminAuth