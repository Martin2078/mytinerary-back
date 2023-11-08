const validator= (schema)=>(req,res,next)=>{
    const validation= schema.validate(req.body,{abortEarly: false})
    if (validation.error) {
        return res.json({
            success: false,
            error: validation.error.details.map(error => error.message),      
        })
    }
    return next()
}
export default validator