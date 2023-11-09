import User from '../models/User.js'

export default async function (req,res,next) {
    try {
        const finded =await User.find({email:req.body.email})
        if (finded.length==0) {
            return res.json({
                success:false,
                error:'User not Finded'
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

