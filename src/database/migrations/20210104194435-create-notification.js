module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Notifications', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER
			},
			message: {
				type: Sequelize.STRING
			},
			isRead: {
				type: Sequelize.BOOLEAN
			},
			requestId: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Notifications');
	}
};
