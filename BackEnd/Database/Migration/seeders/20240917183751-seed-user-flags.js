'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Flags', [
      {
        reason: 'Fraudulent activity',
        blocked_at: new Date(),
        users_user_id: 1
      },
      {
        reason: 'Non-payment',
        blocked_at: new Date(),
        users_user_id: 4
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Flags', null, {});
  }
};
