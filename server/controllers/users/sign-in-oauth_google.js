require("dotenv").config();
const { user } = require("../../models");
const { generatedAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  const { user_email, nickname, profile_img } = req.body;

  const isEmail = await user.findOne({
    where: { user_email },
  });

  if (!isEmail) {
    const signUp = await user.create({
      type: "nomal",
      user_email,
      password: "비크립트로 돌려서 그냥 아무거나 해라",
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
      password: "비번어떡하지?",
      nickname: loginInfo.nickname,
      profile_img: loginInfo.profile_img,
    };

    const accessToken = generatedAccessToken(payload);

    return res
      .status(201)
      .cookie("accessToken", accessToken, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
      })
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
      password: "비번어떡하지?",
      nickname,
      profile_img,
    };

    const accessToken = generatedAccessToken(payload);

    return res
      .status(201)
      .cookie("accessToken", accessToken, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
      })
      .send({
        data: {
          payload,
          accessToken,
        },
        message: "로그인 성공",
      });
  }
};
