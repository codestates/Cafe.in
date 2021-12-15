const { user } = require("../../../models");

module.exports = async (req, res) => {
  return res.status(200).send("내 정보 보기 성공");
};
