require("dotenv").config();
const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  const { password, user_email } = req.body;

  const userInfo = await user.findOne({
    where: { user_email },
  });
  if (!userInfo) {
    return res
      .status(400)
      .send({ message: "아이디를 잘못 쳤거나 가입을 안 했거나" });
  }

  const userInfo2 = await user.findOne({
    where: { user_email: userInfo.user_email, password },
  });
  if (!userInfo2) {
    return res.status(400).send({ message: "비번이 틀렸어요" });
  } else {
    const { user_email, password, nickname, id, profile_img } = userInfo2;

    const payload = {
      id,
      user_email,
      password,
      nickname,
      profile_img,
      iat: Math.floor(Date.now() / 1000) + 60 * 60,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_, {
      algorithm: "HS256",
    });

    res.cookie("accessToken", accessToken, {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    });

    return res.status(200).send({ message: "로그인 성공" });
  }
};
