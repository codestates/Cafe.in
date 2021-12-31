const { user } = require("../../../models");
const { generatedAccessToken, accessTokenDecoded } = require('../../modules/jwt')
const { registerPW1, registerPW2 } = require('../../modules/register');
const { failedResponse } = require("../../modules/response");

module.exports = async (req, res) => {
  // 클라이언트 요청 -> cookies에 있는 accessToken 받아오기 (JWT인증방식)
  // accessToken을 재발급 해야 하므로 let 변수로 선언
  let accessToken = req.cookies.accessToken;

  // 사용자 정보(payload) 복호화
  // const payload = jwt.verify(accessToken, ACCESS_SECRET);
  // 모듈화
  const payload = accessTokenDecoded(accessToken)

  // 클라이언트 요청 -> body에 old_password, new_password 구조분해 할당
  const { old_password, new_password } = req.body;
  // 사용자 정보에서 user_email과 password 구조분해 할당
  const { user_email, password } = payload;

  // password 변경은 클라이언트에서 넘어오는 요청body에 현재 비밀번호와 변경 할 비밀번호만 있기에,
  // password만 DB에서 조회 후 변경 하려고 했는데, password는 유일성을 만족하지 않기에
  // JWT토큰 인증방식을 이용해서 사용자 정보를 알아내어 유일성을 만족하는 user_email이 필요하다.

  // 유일성을 만족하는 user_email을 이용하여 찾기
  const userInfo = await user.findOne({
    where: { user_email: user_email, password: password },
  });

  // 현재 비밀번호(old_password)와 DB에 있는 비밀번호 비교 -> DB데이터 검사
  if (userInfo.password !== old_password) {
    return failedResponse(res, 400, '비밀번호를 확인해 주십시오.')
  }
  // 현재 비밀번호(old_password)와 JWT토큰에 있는 사용자 정보(payload)의 비밀번호 비교 -> JWT토큰 인증방식
  if (old_password !== password) {
    return failedResponse(res, 400, "현재 비밀번호가 틀렸습니다.")
  }
  // 현재 비밀번호와 변경 할 비밀번호가 같으면 안되므로 클라이언트 - 서버에서 이중으로 검사를 한다.
  // 또한, 변경 할 비밀번호도 회원가입 당시에 했던 유효성 검증을 한다.
  if (old_password === new_password) {
    return failedResponse(res, 400, "현재 비밀번호와 바꿀 비밀번호가 같습니다. 다시 입력해주세요")
  }
  // 비밀번호 정규식 검증
  if (!registerPW1(new_password)) {
    return failedResponse(res, 400, "비밀번호는 영문, 숫자, 특수문자로 이루어진 8~16자 입니다")
  }
  if (registerPW2(new_password)) {
    return failedResponse(res, 400, "같은 문자, 숫자는 2번만")
  }

  // 모든 검증이 끝난 후 비밀번호 변경 DB Sequelize함수 update() 실행
  // model.update(Object column name, Object where)
  await user.update(
    {
      password: new_password,
    },
    {
      where: { user_email: user_email, password: old_password },
    }
  );

  // 사용자 정보의 password를 new_password로 바꿔준다.
  payload.password = new_password;

  // 변경 전 비밀번호로 암호화 되었던 토큰을 폐기하고 새로운 비밀번호로 암호화 된 토큰을 발급
  // 9번 line -> let 변수 참고
  // accessToken = jwt.sign(payload, ACCESS_SECRET, signOptional);
  // 모듈화
    accessToken = generatedAccessToken(payload)

  const cookie = {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  // 성공적으로 비밀번호가 변경이 되었다면 성공코드 200과 cookie-parser를 이용한 accessToken과
  // 사용자 정보 및 성공메시지 클라이언트에게 전달
  return res.status(200).cookie("accessToken", accessToken).send({
    data: payload,
    message: "비밀번호 변경 완료",
  });
};
