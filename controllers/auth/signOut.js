import User from "../../models/User.js";

export default async function(req,res,next) {
    try {
        console.log(req.user);
        console.log(req.body);
        await User.findOneAndUpdate({email:req.user.email},{
            online:false
        },{new:true})
    
        return res.json({
            message:"Successfull LogOut",
            success:true
        })
    } catch (error) {
       return error 
    }
    
}