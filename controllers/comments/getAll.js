import Comment from "../../models/Comment.js";

export default async (req,res)=>{
    try {
        let comments=await Comment.find({itineraryId:req.params.id}).populate('userId')

        return res.json({
            success:true,
            response:comments,
            message:'All comments'
        })
    } catch (error) {
        
    }
}