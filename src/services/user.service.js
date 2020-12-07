/**
   * @param {object} attribute
   * @return {object} this is a service for finding user by attribute
   */
/* eslint-disable valid-jsdoc */
import models from '../database/models';

const { User } = models;

/**
 * this is a user service
 */
class UserService {
	/**
   * @param {object} user
   * @return {object} this is a service for creating a user
   */
	static createUser(user) {
		return User.create(user);
	}

	/**
   * @param {object} attribute
   * @return {object} this is a service for finding user by attribute
   */
	static findUserByAttribute(attribute) {
		return User.findOne({ where: attribute });
	}

	/**
   // eslint-disable-next-line valid-jsdoc
   // eslint-disable-next-line valid-jsdoc
   * @param {object} attribute
   * @return {object} this is a service for finding user by attribute
   */
	static async findOrCreate(table, data, condition) {
		try {
			const datas = await table.findOrCreate({
				where: condition,
				defaults: data,
			});
			return datas[0];
		} catch (error) {
			return error;
		}
	}
}

export default UserService;
