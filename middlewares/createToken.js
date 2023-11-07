import jwt from "jsonwebtoken"
export default (req,res,next) =>{

    const {email}=req.body

    const token = jwt.sign(
        {email},
        process.env.SECRET,
        {expiresIn: 86400}
    )
    req.body.token=token
    return next()
}