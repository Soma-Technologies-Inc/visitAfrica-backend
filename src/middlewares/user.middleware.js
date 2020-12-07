/* eslint-disable no-underscore-dangle */
import UserService from '../services/user.service';

/**
 *
 * @param {object} accessToken
 * @param {object} refreshToken
 * @param {object} profile
 * @param {object} done
 * @returns {object} this is for OAuth
 */
export async function googleAuth(accessToken, refreshToken, profile, done) {
	const user = await UserService.findUserByAttribute({ email: profile._json.email });

	const payload = {
		fullname: profile.displayName,
		email: profile._json.email,
	};

	if (!user) {
		await UserService.createUser(payload);
	}
	done(null, payload);
}

/**
 *
 * @param {Object} accessToken
 * @param {Object} refreshToken
 * @param {Object} profile
 * @param {Object} done
 * @returns {object} this is for OAuth
 */
export async function facebookAuth(accessToken, refreshToken, profile, done) {
	const user = await UserService.findUserByAttribute({ email: profile._json.email });

	const payload = {
		fullname: profile.displayName,
		email: profile._json.email,
	};

	if (!user) {
		await UserService.createUser(payload);
	}
	done(null, payload);
}
