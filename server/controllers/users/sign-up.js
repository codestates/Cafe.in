const { user } = require("../../models");
const {
  registerEmail,
  registerPW1,
  registerPW2,
  registerNickname,
} = require("../modules/register");
const { failedResponse } = require("../modules/response");
const bcrypt = require("bcrypt");
//const { transporter, NODEMAILER_USER } = require("../modules/mailer");

module.exports = async (req, res) => {
  const { user_email, password, nickname } = req.body;
  let { profile_img } = req.body;

  if (!user_email || !password || !nickname) {
    return failedResponse(res, 400, "모두 입력하세요.");
  }

  const isEmail = await user.findOne({
    where: { user_email },
  });

  if (isEmail) {
    return failedResponse(res, 400, "이미 존재하는 email 입니다.");
  }

  const isNickname = await user.findOne({
    where: { nickname },
  });

  if (isNickname) {
    return failedResponse(res, 400, "이미 존재하는 nickname 입니다.");
  }

  if (!registerEmail(user_email)) {
    return failedResponse(res, 400, "형식에 맞는 email을 작성하세요.");
  }

  if (!registerPW1(password)) {
    return failedResponse(
      res,
      400,
      "비밀번호는 영문, 숫자, 특수문자로 이루어진 8~16자 입니다"
    );
  }
  if (registerPW2(password)) {
    return failedResponse(res, 400, "같은 문자, 숫자는 2번만");
  }

  if (!registerNickname(nickname)) {
    return failedResponse(
      res,
      400,
      "nickname은 영문 및 숫자로만 구성이 되며, 길이는 4~12자 입니다."
    );
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  if (!profile_img) {
    profile_img = "http://placeimg.com/640/480/any";

    const payload = {
      type: "nomal",
      user_email,
      password: passwordHash,
      nickname,
      profile_img,
    };

    await user.create(payload);

    // const mailInfo = await transporter.sendMail({
    //   from: `"Team Caffeine" <${NODEMAILER_USER || 1234}>`,
    //   to: user_email,
    //   subject: `환영합니다. ${nickname}님 Team Caffeine 입니다.`,
    //   text: `여러분들을 위한 카페리스트가 준비 되어 있습니다.
    //         로그인 입력 코드 기능(advanced) -> 다음 기회에 구현`,
    // });

    return res.status(201).send({
      data: payload,
      message: "회원가입을 축하드립니다. (기본 profile_img)",
    });
  } else {
    const payload = {
      type: "nomal",
      user_email,
      password: passwordHash,
      nickname,
      profile_img,
    };

    await user.create(payload);

    return res.status(201).send({
      data: payload,
      message: "회원가입을 축하합니다.",
    });
  }
};
