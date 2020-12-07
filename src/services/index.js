import { Op } from 'sequelize';
import db from '../database/models';

/**
 * This is the class for dealing with database
 */
class Queries {
	/**
	 *
	 * @param {object} table
	 * @param {object} data
	 * @param {object} condition
	 * @returns {object} this returns object
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

export default Queries;
