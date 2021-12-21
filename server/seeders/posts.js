"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: "1",
        title_img: "abc",
        content_img: "asd",
        content: "공대생이 많은 슈퍼카페",
        title: "공대카페",
        location: "대구",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "2",
        title_img: "abc",
        content_img: "asd",
        content: "휘핑크림 맛집",
        title: "cafe 달콤",
        location: "오사카",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "3",
        title_img: "abc",
        content_img: "asd",
        content: "콘센트 多, 1인석 多, 시간제한 無",
        title: "작업하기 좋은 날",
        location: "대전에 있으면 좋겠당",
        lat: 38.155,
        long: 123.5488,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
