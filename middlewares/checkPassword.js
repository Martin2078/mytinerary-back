import User from '../models/User.js'
import bcryptjs  from 'bcryptjs'

export default async function (req,res,next) {
        const userFinded=await User.findOne({email:req.body.email})
        if (!userFinded) {
            return res.status(500).json({
                success:false,
                error:'There is no user with that email!'
            })
        }
        if (bcryptjs.compareSync(req.body.password,userFinded.password)) {
            return next()
        }
        return res.status(500).json({
            success:false,
            error:'Incorrect Password!'
        })
    
}