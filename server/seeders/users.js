"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: "1",
        user_email: "yar0606@naver.com",
        password: "qwe!1234",
        nickname: "번개전사양승준",
        profile_img: null,
      },
      {
        id: "2",
        user_email: "kihoon@naver.com",
        password: "123qwe!!",
        nickname: "코딩전사문기훈",
        profile_img: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
