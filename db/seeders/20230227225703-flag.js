'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      var currentdate = new Date(); 
      await queryInterface.bulkInsert('flags', [{
        baseId: 1,
        isCaptured: false,
        createdAt: currentdate,
        updatedAt: currentdate,
      },
      {
        baseId: 2,
        isCaptured: false,
        createdAt: currentdate,
        updatedAt: currentdate,
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('flags', null, {});
    
  }
};
