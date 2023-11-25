import User from "../../models/User.js";

export default async function(req,res,next) {
    try {
        const {email,password,name,surname,photo}=req.body
        await User.create({
            email,
            password,
            name,
            surname,
            photo,
        })

        return res.status(200).json({
            success:true,
            message:'Successfull registration!'
        })
    } catch (error) {
        return error
    }
    
}