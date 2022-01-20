require("dotenv").config();
const { user } = require("../../models");
const { generatedAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { user_email, nickname, profile_img } = req.body;

  const isEmail = await user.findOne({
    where: { user_email },
  });

  const passwordHash = bcrypt.hashSync(user_email.slice(0, 5), 10);

  const cookieOptions = {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    path: "/",
    domain: "cafestudy.click",
  };

  if (!isEmail) {
    const signUp = await user.create({
      type: "nomal",
      user_email,
      password: passwordHash,
      nickname,
      profile_img,
    });

    const loginInfo = await user.findOne({
      where: { user_email: signUp.user_email },
    });

    const payload = {
      type: "nomal",
      id: loginInfo.id,
      user_email: loginInfo.user_email,
      password: passwordHash,
      nickname: loginInfo.nickname,
      profile_img: loginInfo.profile_img,
    };

    const accessToken = generatedAccessToken(payload);

    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOptions)
      .send({
        data: {
          payload,
          accessToken,
        },
        message: "로그인 성공",
      });
  } else {
    const { user_email, password, nickname, id, profile_img } = isEmail;

    const payload = {
      type: "nomal",
      id,
      user_email,
      password: passwordHash,
      nickname,
      profile_img,
    };

    const accessToken = generatedAccessToken(payload);

    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOptions)
      .send({
        data: {
          payload,
          accessToken,
        },
        message: "로그인 성공",
      });
  }
};
