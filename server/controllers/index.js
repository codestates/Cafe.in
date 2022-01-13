module.exports = {
  sign_in: require("./users/sign-in"),
  sign_in_oauth_google: require("./users/sign-in-oauth_google"),
  sign_out: require("./users/sign-out"),
  sign_up: require("./users/sign-up"),
  deleteAccount: require("./users/delete-account"),
  mypage: require("./users/mypage"),
  changePassword: require("./users/mypage/password"),
  cafe_list: require("./posts/cafe-list"),
  cafe_info: require("./posts/cafe-info"),
  add_hashtag: require("./posts/add-hashtag"),
  cafe_list_click_hash: require("./posts/cafe-list-click-hash"),
  hashtag_click: require("./posts/hashtag-click"),
};
