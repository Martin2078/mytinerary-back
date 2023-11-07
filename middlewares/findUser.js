import User from '../models/User.js'

export default async function (req,res,next) {
    try {
        const finded = User.find({email:req.body.email})
        if (!finded) {
            return res.json({
                success:true,
                message:'User not Finded'
            })
        }
        return next()
        
    } catch (error) {
        return res.json({
            success:false,
            message:'Error finding User'
        })
    }
    
}

