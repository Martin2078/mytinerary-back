import Comment from '../../models/Comment.js'

export default async(req,res)=>{
    try {
        const {itineraryId,userId,title,text,valoration,photo}=req.body
        await Comment.create({
            itineraryId,
            userId,
            title,
            text,
            valoration,
            photo
        })
        return res.json({
            success:true,
            message:'Comment posted!'
        })
    } catch (error) {
        
    }
}