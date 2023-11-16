import express from "express";
import getAll from "../controllers/itineraries/getAll.js";
import getAllOfUser from "../controllers/itineraries/getAllOfUser.js";
import addItinerary from "../controllers/itineraries/addItinerary.js";
import passport from '../middlewares/passport.js'

const router=express.Router()

router.get('/:id',getAll)
router.get('/me/:id',getAllOfUser)
router.post('/',passport.authenticate('jwt',{session:false}),addItinerary)

export default router