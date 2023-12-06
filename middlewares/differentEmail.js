import User from "../models/User.js";

export default async function(req,res,next){
    const notFinded=await User.find({email:req.body.email})
    if (notFinded.length<1) {
        return next()
    }
    return res.status(400).json({
        success:false,
        error:'Your are already registered!'
    })
}