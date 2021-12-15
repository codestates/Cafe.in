const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/sign-in");

router.post("/sign-up");

router.post("/sign-out");

router.delete("/delete-account");

router.get("/mypage");

router.patch("/mypage/password");

module.exports = userController;
