require("dotenv").config();
const { user } = require("../../models");
const { generatedAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { password, user_email } = req.body;

  const checkEmail = await user.findOne({
    where: { user_email },
  });
  if (!checkEmail) {
    return failedResponse(res, 400, "아이디를 잘못 쳤거나 가입을 안 했거나");
  }

  const same = bcrypt.compareSync(password, checkEmail.password);

  if (same) {
    const checkPassword = await user.findOne({
      where: {
        user_email: checkEmail.user_email,
      },
    });

    const payload = {
      type: checkPassword.type,
      id: checkPassword.id,
      user_email: checkPassword.user_email,
      password: checkPassword.password,
      nickname: checkPassword.nickname,
      profile_img: checkPassword.profile_img,
    };

    const accessToken = generatedAccessToken(payload);

    return res.status(201).cookie("accessToken", accessToken).send({
      data: {
        payload,
        accessToken,
      },
      message: "로그인 성공",
    });
  } else return failedResponse(res, 400, "비번이 틀렸어요");
};
