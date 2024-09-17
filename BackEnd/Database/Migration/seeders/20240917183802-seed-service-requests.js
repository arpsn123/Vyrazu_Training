'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Service_Requests', [
      {
        user_id: 3,
        description: 'AC repair needed',
        location: 'City C',
        scheduled_date: '2024-09-20',
        scheduled_start_time: '14:00:00',
        scheduled_end_time: '16:00:00',
        status: 'Active',
        services_id: 1,
        professional_id: 2
      },
      {
        user_id: 5,
        description: 'Fix lights',
        location: 'City D',
        scheduled_date: '2024-09-21',
        scheduled_start_time: '15:00:00',
        scheduled_end_time: '16:30:00',
        status: 'Active',
        services_id: 2,
        professional_id: 1
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Service_Requests', null, {});
  }
};
