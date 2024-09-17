'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Professionals', [
      {
        user_id: 2,
        occupation: 'Electrician',
        location: 'City A'
      },
      {
        user_id: 4,
        occupation: 'AC Repair',
        location: 'City B'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Professionals', null, {});
  }
};
