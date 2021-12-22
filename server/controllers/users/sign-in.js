require("dotenv").config();
const { user } = require("../../models");
const { generatedAccessToken } = require('../modules/jwt')
const { failedResponse } = require('../modules/response')

module.exports = async (req, res) => {
  // 클라이언트 요청 -> body에 user_email, password
  // 필수 데이터 구조분해 할당으로 받기
  const { password, user_email } = req.body;

  // 로그인 기능 -> 회원인지 아닌지 확인 해야 하므로 조건에 맞는 데이터 DB Seqeulize로 검색
  
  // 주요 로직: 먼저, user_email을 검사 그 후 password검사
  // 목적: user_email과 password를 

  // user_email이 DB에 있는지 없는지 검사
  const userInfo = await user.findOne({
    where: { user_email: user_email },
  });
  if (!userInfo) {
    return failedResponse(res, 400, "아이디를 잘못 쳤거나 가입을 안 했거나")
  }

  // user_email이 확인이 되면 password 검사
  const userInfo2 = await user.findOne({
    where: { user_email: userInfo.user_email, password },
  });
  if (!userInfo2) {
    return failedResponse(res, 400, "비번이 틀렸어요")
  } else {
    // user_email과 password가 모두 있는 경우 -> 회원인 경우
    const { user_email, password, nickname, id, profile_img } = userInfo2;

    // 유저 인증방식 -> JWT 토큰 인증

    // 사용자 정보(payload)
    const payload = {
      id,
      user_email,
      password,
      nickname,
      profile_img
    };

    // accessToken 발급
    // const accessToken = jwt.sign(payload, ACCESS_SECRET, signOptional);
    // 모듈화
    const accessToken = generatedAccessToken(payload)

    // 로그인에 성공을 하면 성공코드200과 message는 '로그인 성공'을 전송한다.
    // 추가로, cookie-parser를 이용해 사용자 정보가 암호화 된 accessToken을 'accessToken'의 이름으로 cookie에 담아서 보내고,
    // body.data.payload에 사용자 정보를 보낸다.

    // 클라이언트 단에서는 payload과 accessToken을 이용해 데이터를 핸들링하면 된다.
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
