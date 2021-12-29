"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: "1",
        title_img: "http://placeimg.com/300/300/people",
        content_img: "http://placeimg.com/300/300/people",
        content: "공대생이 많은 슈퍼카페",
        title: "공대카페",
        location: "대구",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "2",
        title_img: "http://placeimg.com/300/300/animals",
        content_img: "http://placeimg.com/300/300/animals",
        content: "휘핑크림 맛집",
        title: "cafe 달콤",
        location: "오사카",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "3",
        title_img: "http://placeimg.com/300/300/arch",
        content_img: "http://placeimg.com/300/300/arch",
        content: "콘센트 多, 1인석 多, 시간제한 無",
        title: "작업하기 좋은 날",
        location: "대전에 있으면 좋겠당",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "4",
        title_img: "http://placeimg.com/300/300/people",
        content_img: "http://placeimg.com/300/300/people",
        content: "저희 업소는 대마초를 판매하지 않습니다",
        title: "cafe weed",
        location: "LA",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "5",
        title_img: "http://placeimg.com/300/300/nature",
        content_img: "http://placeimg.com/300/300/nature",
        content: "평화와 사랑이 넘치는 카페",
        title: "카페 R.I.P",
        location: "LA",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "6",
        title_img: "http://placeimg.com/300/300/arch",
        content_img: "http://placeimg.com/300/300/arch",
        content: "카페가 너무 좋앙",
        title: "카페좋아 카카페",
        location: "LA",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "7",
        title_img: "http://placeimg.com/300/300/animals",
        content_img: "http://placeimg.com/300/300/animals",
        content: "양심있는 사람들이 모이는 곳",
        title: "양심카페",
        location: "LA",
        lat: 38.155,
        long: 123.5488,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
