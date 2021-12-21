const { user } = require("../../models");
const { accessTokenDecoded } = require('../modules/jwt')
const { failedResponse } = require('../modules/response')

module.exports = async (req, res) => {
  // 클라이언트 요청 -> cookie-parser를 이용하므로 cookies에 있는 토큰 받기
  // 클라이언트 요청 -> body에 있는 password 구조분해 할당

  // 회원탈퇴 기능 플로우
  // 1. 로그인을 한 클라이언트는 로그인 할 때 토큰을 발급 받는다.
  // 2. 토큰을 받은 유저만 회원 탈퇴를 할 수 있다. -> 로그인을 한 상태에서만 회원탈퇴를 할 수 있다.
  // 3. 요청이 들어오면 토큰을 서버에서 복호화 한 후, body로 들어온 password와 비교
  // 4. 토큰의 사용자 정보(payload)의 password와 요청body의 password를 비교해서 다를 경우, 오류코드 400과 오류메시지 전송
  // 5. 일치 할 경우, DB Sequelize 함수 destroy()를 통해 유저 삭제 (SQL: Delete)
  // 6. 삭제가 완료 되었을 경우 성공코드 200과 성공메시지 전송

  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return failedResponse(res, 400, "유효하지 않은 토큰")
  } else {
  
    // 모듈화
    const payload = accessTokenDecoded(accessToken)
    const { password } = req.body;
    const { user_email } = payload;

    const userInfo = await user.findOne({
      where: { user_email: user_email, password: password },
    });

    if (!userInfo) {
      return failedResponse(res, 400, "올바른 입력 값이 아닙니다.")
    }

    await user.destroy({
      where: { user_email: user_email, password: password },
    });

    // 삭제를 했기 때문에 data값을 null로 전송한다.
    // 성공을 하면 따로 클라이언트 단에서 데이터 핸들링 할 필요가 없다.
    return res.status(200).send({
      data: null,
      message: "삭제완료",
    });
  }
};
