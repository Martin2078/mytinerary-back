import express from "express";
import getAll from "../controllers/itineraries/getAll.js";
import getAllOfUser from "../controllers/itineraries/getAllOfUser.js";

const router=express.Router()

router.get('/:id',getAll)
router.get('/me/:id',getAllOfUser)

export default router