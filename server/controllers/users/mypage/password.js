const { user } = require("../../../models");

module.exports = async (req, res) => {
  return res.status(200).send("비번바꾸기 성공");
};
