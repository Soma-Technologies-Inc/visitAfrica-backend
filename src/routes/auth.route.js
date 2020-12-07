import { Router } from 'express';
import passport from 'passport';

import AuthController from '../controllers/auth.controller';
import { checkIfEmailExist } from '../middlewares/user.midleware';
import { validateSignup } from '../validations/user.validation';
import { googleAuth, facebookAuth } from '../middlewares/user.middleware';
import '../config/passport.config';

const router = Router();

router.post(
	'/signup',
	validateSignup, checkIfEmailExist, AuthController.signup,
);
router.get(
	'/google',
	googleAuth,
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);
// router.get('/google/redirect',(req,res) =>{
//   res.send('thank you for logging in using google');
// });
router.get(
	'/google/redirect',
	passport.authenticate('google', {
		failureRedirect: '/google',
		session: false,
	}),
	AuthController.loginWithSocialMedia
);

router.get('/facebook', facebookAuth, passport.authenticate('facebook', {
	scope: ['profile', 'email']
}

));

router.get(
	'/facebook/redirect',
	passport.authenticate('facebook', {
		session: false,
		failureRedirect: '/facebook',
	}),
	AuthController.loginWithSocialMedia
);

export default router;
