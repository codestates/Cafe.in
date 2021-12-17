require("dotenv").config();
const jwt = require("jsonwebtoken");
const { user } = require("../../models");
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;
const HS256 = { algorithm: "HS256" };

module.exports = async (req, res) => {
  const { password, user_email } = req.body;

  const userInfo = await user.findOne({
    where: { user_email: user_email },
  });
  if (!userInfo) {
    return res.status(400).send({
      data: null,
      message: "아이디를 잘못 쳤거나 가입을 안 했거나",
    });
  }

  const userInfo2 = await user.findOne({
    where: { user_email: userInfo.user_email, password },
  });
  if (!userInfo2) {
    return res.status(400).send({
      data: null,
      message: "비번이 틀렸어요",
    });
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

    const accessToken = jwt.sign(payload, ACCESS_SECRET, HS256);

    return res
      .status(200)
      .cookie("accessToken", accessToken)
      .send({
        data: {
          payload: payload,
          accessToken: accessToken,
        },
        message: "로그인 성공",
      });
  }
};
