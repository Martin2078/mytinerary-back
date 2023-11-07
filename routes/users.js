import express from 'express';
import validator from '../middlewares/validator.js';
import userValidator from '../validators/userValidator.js';
import getEmail from '../controllers/auth/getEmail.js';
import checkPassword from '../middlewares/checkPassword.js';
import signIn from '../controllers/auth/signIn.js';
import findUser from '../middlewares/findUser.js';
import createToken from '../middlewares/createToken.js';

const router = express.Router();

router.get('/',getEmail)
router.post('/SignIn',validator(userValidator),findUser,checkPassword,createToken,signIn)




export default router;
