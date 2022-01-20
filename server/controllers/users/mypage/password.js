const { user } = require("../../../models");
const {
  generatedAccessToken,
  accessTokenDecoded,
} = require("../../modules/jwt");
const { registerPW1, registerPW2 } = require("../../modules/register");
const { failedResponse } = require("../../modules/response");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  let accessToken = req.cookies.accessToken;

  const payload = accessTokenDecoded(accessToken);

  const { old_password, new_password } = req.body;
  const { user_email, password } = payload;

  const userInfo = await user.findOne({
    where: { user_email },
  });

  const oldSame = bcrypt.compareSync(old_password, userInfo.password);

  if (!oldSame) {
    return failedResponse(res, 400, "비밀번호를 확인해 주십시오.");
  }

  if (old_password === new_password) {
    return failedResponse(
      res,
      400,
      "현재 비밀번호와 바꿀 비밀번호가 같습니다. 다시 입력해주세요"
    );
  }

  if (!registerPW1(new_password)) {
    return failedResponse(
      res,
      400,
      "비밀번호는 영문, 숫자, 특수문자로 이루어진 8~16자 입니다"
    );
  }
  if (registerPW2(new_password)) {
    return failedResponse(res, 400, "같은 문자, 숫자는 2번만");
  }

  const passwordHash = bcrypt.hashSync(new_password, 10);

  await user.update(
    {
      password: passwordHash,
    },
    {
      where: { user_email },
    }
  );

  payload.password = passwordHash;
  delete payload.exp;
  delete payload.iat;

  accessToken = generatedAccessToken(payload);

  return res.status(200).cookie("accessToken", accessToken).send({
    data: payload,
    message: "비밀번호 변경 완료",
  });
};
