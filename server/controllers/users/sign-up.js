const { user } = require("../../models");
const { registerEmail, registerPW1, registerPW2, registerNickname } = require('../modules/register')
const { failedResponse } = require('../modules/response')
module.exports = async (req, res) => {
  // 클라이언트 요청 -> body에 user_email, password, nickname, profile_img(Optional)
  // 필수 데이터 구조분해 할당으로 받기
  const { user_email, password, nickname } = req.body
  // 변경이 될 수 있는 자료는 let으로 받는다. (Optional)
  let { profile_img } = req.body

  // 필수 데이터 유/무 검증
  // if(!user_email || !password || !nickname) {
  //   return res.status(400).send({
  //     data: null,
  //     message: '모두 입력하세요.'
  //   })
  // }
  if(!user_email || !password || !nickname) {
    return failedResponse(res, 400, '모두 입력하세요.')
  }

  // 데이터베이스랑 비교
  // DB Sequelize 함수를 이용해 중복검사를 한다.
  const isEmail = await user.findOne({
    where: { user_email: user_email }
  })

  // user_email중복 예외처리
  // email같은 경우는 각각의 email사이트에서 유효성 검증 단계와 중복 검사를 거친다.
  // 하지만 프로젝트 상에서 'id'와 같은 기능으로 사용하기에 'id'를 유효성 검증을 하듯,
  // 프로젝트 상에서 email 중복 검사를 한다.
  if(isEmail) {
    return failedResponse(res, 400, '이미 존재하는 email 입니다.')
  }

  
  const isNickname = await user.findOne({
    where: { nickname: nickname }
  })

  // nickname중복 예외처리 
  if(isNickname) {
    return failedResponse(res, 400, '이미 존재하는 nickname 입니다.')
  }

  // 비밀번호는 유일성을 만족하지 않아도 되기에 중복검사를 할 필요가 없다.
  // 유효성 검증(정규식)
  // user_email
  // email형식 (영어랑 숫자만 허용, blah1@blah2.blah3 -> blah3에는 2~3자의 영문만 가능하다.)
  if(!registerEmail(user_email)) {
    return failedResponse(res, 400, '형식에 맞는 email을 작성하세요.')
  }

  // password
  // 통념상 많이 알려진 비밀번호의 규칙은 '영문자 + 숫자 + 특수문자'이다.
  // 또한 같은 문자가 3번 이상 반복되지 않는다.
  // 위의 2가지를 모두 검증
  if (!registerPW1(password)) {
    return failedResponse(res, 400, "비밀번호는 영문, 숫자, 특수문자로 이루어진 8~16자 입니다")
  }
  if (registerPW2(password)) {
    return failedResponse(res, 400, "같은 문자, 숫자는 2번만")
  }

  // nickname
  // 닉네임은 흔히 instagram이나 sns를 이용할 때의 'id'와 같은 것이다.
  // 절대, 중복이 되어선 안 되고, email과는 다르게 다른 사이트에서 제공되지 않는
  // 이 프로젝트의 서비스에서 제공되는 것이므로 철저하게 유효성 검증과 중복검사를 해야 한다.
  // 모든 유효성 검증은 클라이언트 - 서버 둘 다 확인한다.
  // 닉네임은 영문자와 숫자로만 이루어지며 크기는 4 ~ 12 자까지 허용
  if(!registerNickname(nickname)) {
    return failedResponse(res, 400, 'nickname은 영문 및 숫자로만 구성이 되며, 길이는 4~12자 입니다.')
  } 
  
  // Optional항목인 profile_img
  // profile_img가 있을 경우와 없을 경우를 나누어서 분기

  // profile_img가 없을 경우, 서버에서 제공하는 기본이미지
  // ex)카카오톡 프로필 사진이 아무 것도 없을 경우 기본이미지
  if(!profile_img) {
    profile_img = 'http://placeimg.com/640/480/any'

    const payload = {
      user_email: user_email,
      password: password,
      nickname: nickname,
      profile_img: profile_img
    }

    await user.create(payload)

    return res.status(201).send({
      data: payload,
      message: '회원가입을 축하드립니다. (기본 profile_img)'
    })
  }else {
    const payload = {
      user_email: user_email,
      password: password,
      nickname: nickname,
      profile_img: profile_img
    }
    // profile_img가 있을 경우 그대로 진행
    await user.create(payload)

    return res.status(201).send({
      data: payload,
      message: '회원가입을 축하합니다.'
    })
  }
}
