module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Users', [{
			fullname: 'John Doe',
			email: 'joe@test.com',
			createdAt: new Date(),
			updateddAt: new Date(),
		}], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
