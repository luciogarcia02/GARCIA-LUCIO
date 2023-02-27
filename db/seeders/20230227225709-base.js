'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        var currentdate = new Date(); 
        await queryInterface.bulkInsert('bases', [{
          points:0,
          createdAt: currentdate,
          updatedAt: currentdate,
        },
        {
          points:0,
          createdAt: currentdate,
          updatedAt: currentdate,
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
