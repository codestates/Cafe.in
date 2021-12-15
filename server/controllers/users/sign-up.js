const { user } = require("../../models");

module.exports = async (req, res) => {
  await user.create({
    user_email: "admin@naver.com",
    password: "1234",
    nickname: "admin",
    profile_img: "lala",
  });

  return res.status(200).send("회원가입 성공");
};
