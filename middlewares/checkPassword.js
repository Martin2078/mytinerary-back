import User from '../models/User.js'
import bcryptjs  from 'bcryptjs'

export default async function (req,res,next) {
        const userFinded=await User.findOne({email:req.body.email})
        if (!userFinded) {
            return res.json({
                success:false,
                message:'Incorrect email!'
            })
        }
        if (bcryptjs.compareSync(req.body.password,userFinded.password)) {
            return next()
        }
        return res.json({
            success:false,
            error:'Incorrect Password!'
        })
    
}