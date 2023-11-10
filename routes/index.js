import express from 'express';
import citiesRouter from './cities.js';
import usersRouter from './users.js';
import itinerariesRouter from './itineraries.js'
const router = express.Router();

router.use('/cities',citiesRouter)
router.use('/auth',usersRouter)
router.use('/itineraries',itinerariesRouter)
export default router;
