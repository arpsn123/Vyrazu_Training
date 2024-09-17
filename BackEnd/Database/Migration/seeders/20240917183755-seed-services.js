'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'AC Repair',
        description: 'Fix AC units',
        cost: 50.0,
        duration: 2.0,
        category_id: 1
      },
      {
        name: 'Electrician',
        description: 'Fix electrical issues',
        cost: 30.0,
        duration: 1.5,
        category_id: 1
      },
      {
        name: 'Beauty Salon',
        description: 'Salon services for women',
        cost: 40.0,
        duration: 1.5,
        category_id: 2
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
