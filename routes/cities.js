import express from 'express';
import getCities from '../controllers/cities/getAll.js';
import getOneCity from '../controllers/cities/getOneCity.js';

const router = express.Router();


router.get('/',getCities)
router.get('/:id',getOneCity)

export default router;