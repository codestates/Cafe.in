const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/sign-in", controllers.sign_in);

router.post("/sign-up", controllers.sign_up);

router.post("/sign-out", controllers.sign_out);

router.post("/delete-account", controllers.deleteAccount);

router.get("/mypage", controllers.mypage);

router.patch("/mypage/password", controllers.changePassword);

module.exports = router;
