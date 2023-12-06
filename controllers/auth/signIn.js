import User from "../../models/User.js";

export default async function (req,res,next) {
    try {
        const userFinded=await User.findOneAndUpdate({email:req.body.email},
            {online:true},
            {new:true}).select('-password').populate("favorites")
        if (userFinded==null) {
            return res.status(404).json({
                success:false,
                error:'Unregistered user!'
            })
        }
            return res.status(200).json({
                success:true,
                response:{
                    userFinded,
                    token:req.body.token
                },
                message:'Succesfull Sign In!'
            })
    } catch (error) {
        return error
    }
}