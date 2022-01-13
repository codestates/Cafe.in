const { user } = require("../../../models");
const { accessTokenDecoded, isAccessToken } = require("../../modules/jwt");
const { failedResponse } = require("../../modules/response");

module.exports = async (req, res) => {
  const { accessToken } = req.cookies;

  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  const payload = accessTokenDecoded(accessToken);
  if (!payload) {
    return failedResponse(res, 500, "미안, 다시 시도해 주세요.");
  } else {
    const { user_email, nickname, profile_img } = payload;
    return res.status(200).send({
      data: {
        user_email,
        nickname,
        profile_img,
      },
      message: "마이페이지 정보 전달 완료",
    });
  }
};
