module.exports = (sequelize, DataTypes) => {
	const trips = sequelize.define('trips', {
		departureFrom: DataTypes.INTEGER,
		departureTo: DataTypes.INTEGER,
		startingDate: DataTypes.DATE,
		returningDate: DataTypes.DATE,
		reason: DataTypes.STRING,
		status: DataTypes.STRING,
	}, {});
	trips.associate = (models) => {
		trips.belongsTo(
			models.user,
			{ foreignKey: 'userId' },
			{ onDelete: 'cascade' },
			{ onUpdate: 'cascade' }
		);
	};
	return trips;
};
