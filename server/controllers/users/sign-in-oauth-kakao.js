require("dotenv").config();
const { user } = require("../../models");
const { generatedAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");
const axios = require("axios");

module.exports = async (req, res) => {
  let userInfo = {};

  const bodyData = {
    grant_type: "authorization_code",
    client_id: process.env.KAKAO_ID,
    //redirect_uri: "http://localhost:3000",
    //client_secret: process.env.KAKAO_SECRET,
    code: req.body.kakaoCode,
  };

  const queryStringBody = Object.keys(bodyData)
    .map((fill) => encodeURIComponent(fill) + "=" + encodeURI(bodyData[fill]))
    .join("&");
  //걍 공식임 복붙하셈
  axios
    .post("https://kauth.kakao.com/oauth/token", queryStringBody, {
      "Content-type": "application/x-www-form-urlencoded",
    })
    .then((code) => {
      axios
        .get(`https://kapi.kakao.com/v2/user/me`, {
          headers: { Authorization: `Bearer ${code.data.access_token}` },
        })
        .then(async (data) => {
          //카카오는 이메일 연동을 안 하는 경우도 있긴 한데.. 예외처리는 나중에 하께
          userInfo = data.data;
        });
    });
  const isEmail = await user.findOne({
    where: { user_email: userInfo.kakao_account.email },
  });

  if (!isEmail) {
    const signUp = await user.create({
      type: "nomal",
      user_email: userInfo.kakao_account.email,
      password: "비번어떡하지?",
      nickname: userInfo.kakao_account.profile.nickname,
      profile_img: userInfo.kakao_account.profile.profile_image_url,
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
      .status(200)
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
      .status(200)
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
