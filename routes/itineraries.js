import express from "express";
import getAll from "../controllers/itineraries/getAll.js";
import getAllOfUser from "../controllers/itineraries/getAllOfUser.js";
import addItinerary from "../controllers/itineraries/addItinerary.js";
import passport from '../middlewares/passport.js'
import getOne from "../controllers/itineraries/getOne.js";
import firebaseItinerary from '../middlewares/firebaseItinerary.js'
import firebaseItineraryActivities from "../middlewares/firebaseItineraryActivities.js";
const router=express.Router()

router.get('/:id',getAll)
router.get('/me/:id',getAllOfUser)
router.get('/one/:id',getOne)
router.post('/',passport.authenticate('jwt',{session:false}),firebaseItinerary,firebaseItineraryActivities,addItinerary)

export default router