// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };





'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        f_name: 'John',
        l_name: 'Doe',
        email: 'john.doe@email.com',
        password_hash: 'hash1',
        role: 'Customer',
        created_at: new Date()
      },
      {
        f_name: 'Jane',
        l_name: 'Smith',
        email: 'jane.smith@email.com',
        password_hash: 'hash2',
        role: 'Employee',
        created_at: new Date()
      },
      {
        f_name: 'Alice',
        l_name: 'Brown',
        email: 'alice.brown@email.com',
        password_hash: 'hash3',
        role: 'Customer',
        created_at: new Date()
      },
      {
        f_name: 'Bob',
        l_name: 'White',
        email: 'bob.white@email.com',
        password_hash: 'hash4',
        role: 'Employee',
        created_at: new Date()
      },
      {
        f_name: 'Carol',
        l_name: 'Green',
        email: 'carol.green@email.com',
        password_hash: 'hash5',
        role: 'Customer',
        created_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
