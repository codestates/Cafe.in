module.exports = {
  sign_in: require("./users/sign-in"),
  sign_out: require("./users/sign-out"),
  sign_up: require("./users/sign-up"),
  deleteAccount: require("./users/delete-account"),
  mypage: require("./users/mypage"),
  changePassword: require("./users/mypage/password"),
  cafe_list: require("./posts/cafe-list"),
  cafe_info: require("./posts/cafe-info"),
  like_hashtag: require("./posts/like-hashtag"),
  dislike_hashtag: require("./posts/dislike-hashtag"),
  cafe_list_likehash: require("./posts/cafe-list-likehash"),
};
