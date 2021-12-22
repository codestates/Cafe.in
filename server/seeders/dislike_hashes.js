"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("dislikes_hash_tags", [
      {
        id: "1",
        counts: 0,
        name: "#공대생많음",
      },
      {
        id: "2",
        counts: 0,
        name: "#커플많음",
      },
      {
        id: "3",
        counts: 0,
        name: "#사장싸가지",
      },
      {
        id: "4",
        counts: 0,
        name: "#너무비싸",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dislikes_hash_tags", null, {});
  },
};
