//seeders/안에 파일.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts_dislikes_hash_tags", [
      {
        hash_tag_id: 1,
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hash_tag_id: 4,
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hash_tag_id: 3,
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hash_tag_id: 2,
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts_dislikes_hash_tags", null, {});
  },
};
