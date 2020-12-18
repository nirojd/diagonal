"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    for (let i = 1; i < 10; i++) {
      data.push({
        element_name: `task ${i}`,
        position: i,
      });
    }
    return queryInterface.bulkInsert("elements", data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("elements", null, {});
  },
};
