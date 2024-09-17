'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Service_Has_Professionals', [
      {
        service_id: 1,
        professional_id: 2
      },
      {
        service_id: 2,
        professional_id: 1
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Service_Has_Professionals', null, {});
  }
};
