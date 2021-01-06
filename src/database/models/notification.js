const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	/**
	 * notification class extending from model
	*/
	class notification extends Model {
		/**
		 * @param {Object} models
		 * @returns {Object}
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	notification.init({
		receiver_id: DataTypes.INTEGER,
		travel_id: DataTypes.INTEGER,
		message: DataTypes.TEXT,
		is_read: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'notification',
	});
	return notification;
};
