import express from 'express';
import citiesRouter from './cities.js';
import usersRouter from './users.js';
const router = express.Router();

router.use('/cities',citiesRouter)
router.use('/auth',usersRouter)

export default router;
