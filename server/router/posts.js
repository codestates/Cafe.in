const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get(
  "/cafe-list/:location/lat/:lat/long/:long/:lastid/:islogin/",
  controllers.cafe_list
);

// router.get(
//   "/cafe-list/:location/:lat/:long/:lastid",
//   controllers.cafe_list_sort_hash
// );

router.get(
  "/cafe-list/:location/lat/:lat/long/:long/:lastid/:islogin/:category",
  controllers.cafe_list_click_hash
);

router.get("/cafe-info/:postid/:islogin", controllers.cafe_info);

router.post("/add-hashtag/:islogin", controllers.add_hashtag);

// router.post("/dislike-hashtag");

router.post("/hashtag-click/:islogin", controllers.hashtag_click);

module.exports = router;
