export default async function decodeJWT(req,res,next) {
    if (!req.body.credential) {
        return next()
    }
    const parts=req.body.credential.split(".")
    if (parts.length!==3) {
       return "invalidid jwt" 
    }
    const header = JSON.parse(atob(parts[0]))
    const payload= JSON.parse(atob(parts[1]))
    const data={
        name:payload.given_name,
        surname:payload.family_name,
        email:payload.email,
        photo:payload.picture,
        password:payload.jti
    }
    req.body=data
    return next()
}