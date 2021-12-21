const { user } = require("../../../models");
const { accessTokenDecoded, isAccessToken } = require('../../modules/jwt')
const { failedResponse } = require('../../modules/response')

module.exports = async (req, res) => {

// mypage 구현
// 클라이언트 요청 -> GET요청
// JWT토큰 인증방식 -> 요청 cookies에 있는 accessToken 사용

// JWT토큰 인증
const accessToken = req.cookies.accessToken
if(accessToken === null || !accessToken) {
  return isAccessToken(res)
}

// JWT토큰 복호화 -> 사용자 정보(payload) 핸들링
  const payload = accessTokenDecoded(accessToken)
  if(!payload) {
  // 복호화에 실패했을 경우
  // 클라이언트의 오류가 아닌 서버측에서 오류이기 때문에 500대 오류코드와 오류메시지 전송
    return failedResponse(res, 500, '미안, 다시 시도해 주세요.')
  }else {
  // 복호화에 성공 했을 경우,
  // 사용자 정보 구조분해 할당
    const { id, user_email, password, nickname, profile_img } = payload

  // 성공코드 200과 사용자 정보 전송
  // but, 사용자 정보 중 password는 제외 후 전송한다. (지금은 결과 프로젝트 상 결과 확인 차원으로 전송)
    return res.status(200).send({
        data: {
        id,
        user_email,
        password, //클라에 보내 줄 때에는 따로 password는 빼야 함
        nickname,
        profile_img
      },
        message: '마이페이지 정보 전달 완료'
    })
  }

};