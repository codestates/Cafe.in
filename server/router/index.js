const express = require("express");
const router = express.Router();
const userController = require("./users");
const postsController = require("./posts");

router.use("/users", userController);
router.use("/posts", postsController);

module.exports = router;
