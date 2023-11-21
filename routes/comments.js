import express from 'express'
import passport from '../middlewares/passport.js'
import createComment from '../controllers/comments/createComment.js'
import getAll from '../controllers/comments/getAll.js'
import likeComment from '../controllers/comments/likeComment.js'
import dislikeComment from '../controllers/comments/dislikeComment.js'
import deleteOne from '../controllers/comments/deleteOne.js'
import isAuthor from '../middlewares/isAuthor.js'

const router=express.Router()

router.get('/:id',getAll)
router.post('/',passport.authenticate('jwt',{session:false}),createComment)
router.put('/like',passport.authenticate('jwt',{session:false}),isAuthor,likeComment)
router.put('/dislike',passport.authenticate('jwt',{session:false}),isAuthor,dislikeComment)
router.delete('/:id',passport.authenticate('jwt',{session:false}),isAuthor,deleteOne)

export default router