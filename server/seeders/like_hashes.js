"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("likes_hash_tags", [
      {
        id: "1",
        counts: 0,
        name: "#작업하기좋음",
      },
      {
        id: "2",
        counts: 0,
        name: "#조용함",
      },
      {
        id: "3",
        counts: 0,
        name: "#고양이있음",
      },
      {
        id: "4",
        counts: 0,
        name: "#마끼야또맛집",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("likes_hash_tags", null, {});
  },
};
