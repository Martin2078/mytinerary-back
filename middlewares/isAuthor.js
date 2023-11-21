import Comment from "../models/Comment.js";

export default async function isAuthor(req,res,next) {
    
    let finded=await Comment.find({userId:req.user._id})
    if (finded) {
        return next()
    }
    return res.json({
        success:false,
        message:'This user is not the author of this comment'
    })
}