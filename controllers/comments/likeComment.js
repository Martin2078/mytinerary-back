import Comment from "../../models/Comment.js";

export default async(req,res)=>{
    try {
        let commentUpdated=await Comment.findByIdAndUpdate(req.params.id,
            {like:like+1},
            {new:true})

        return res.json({
            success:true,
            message:"Comment liked!"
        })
    } catch (error) {
        
    }
}