import express from 'express'
import passport from '../middlewares/passport.js'
import createComment from '../controllers/comments/createComment.js'
import getAll from '../controllers/comments/getAll.js'
const router=express.Router()

router.get('/:id',getAll)
router.post('/',passport.authenticate('jwt',{session:false}),createComment)

export default router