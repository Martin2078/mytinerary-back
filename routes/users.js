import express from 'express';
import validator from '../middlewares/validator.js';
import userValidator from '../validators/userValidator.js';
import getEmail from '../controllers/auth/getEmail.js';
import checkPassword from '../middlewares/checkPassword.js';
import signIn from '../controllers/auth/signIn.js';
import findUser from '../middlewares/findUser.js';
import createToken from '../middlewares/createToken.js';
import registerValidator from '../validators/registerValidator.js';
import differentEmail from '../middlewares/differentEmail.js';
import hashPassword from '../middlewares/hashPassword.js';
import register from '../controllers/auth/register.js';
import passport from '../middlewares/passport.js';
import signOut from '../controllers/auth/signOut.js'
import firebaseUserPhoto from '../middlewares/firebaseUserPhoto.js';
import favoriteActions from '../controllers/auth/favoriteActions.js';


const router = express.Router();

router.get('/',getEmail)
router.post('/SignIn',checkPassword,createToken,signIn)
router.post('/SignOut',passport.authenticate('jwt',{session:false}),signOut)
router.post('/Register',validator(registerValidator),differentEmail,firebaseUserPhoto,hashPassword,register)
router.post('/favorites/:id',passport.authenticate('jwt',{session:false}),favoriteActions.addFavorite)
router.delete('/favorites/:id',passport.authenticate('jwt',{session:false}),favoriteActions.deleteFavorite)


export default router;
