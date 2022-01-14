const { user } = require("../../models");
const { accessTokenDecoded } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { accessToken } = req.cookies;
  const { password } = req.body;

  if (!accessToken) {
    return failedResponse(res, 400, "유효하지 않은 토큰");
  } else {
    const payload = accessTokenDecoded(accessToken);
    const { user_email } = payload;

    const userInfo = await user.findOne({
      where: { user_email },
    });

    const same = bcrypt.compareSync(password, userInfo.password);

    if (!same) {
      return failedResponse(res, 400, "비밀번호를 확인해주세요.");
    }

    await user.destroy({
      where: { user_email },
    });

    res.clearCookie("accessToken", { path: "/" });

    return res.status(200).send({
      data: null,
      message: "삭제완료",
    });
  }
};
