import Comment from "../../models/Comment.js"

export default async (req,res)=> {
    
    await Comment.findByIdAndDelete(req.params.id)
    return res.json({
        success:true,
        message:'comment eliminated!'
    })
}