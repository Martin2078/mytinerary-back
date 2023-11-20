import Comment from "../../models/Comment.js";

export default async (req, res) => {
    try {
        let comment = await Comment.findById(req.body.commentId)
        let alreadyDisliked = comment.dislikes.find(dislike => dislike == req.body.userId)
        if (alreadyDisliked) {
            comment.dislikes = comment.dislikes.filter((dislike) => dislike != req.body.userId)
            await comment.save()
            return res.json({
                success: true,
                message: "comment not disliked!"
            })
        } else {
            let alreadyLike = comment.likes.find(like => like == req.body.userId)
            if (alreadyLike) {
                comment.likes = comment.likes.filter((like) => like != req.body.userId)
            }
            comment.dislikes.push(req.body.userId)
            await comment.save()
            return res.json({
                success: true,
                message: 'comment disliked!'
            })
        }



    } catch (error) {
        return error
    }
}