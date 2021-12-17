const { user } = require("../../../models");
const jwt = require('jsonwebtoken')
const ACCESS_SECRET = process.env.ACCESS_SECRET

module.exports = async (req, res) => {

const accessToken = req.cookies.accessToken
if(accessToken === null || !accessToken) {
  return res.status(400).send({
    data: null,
    message: '인증되지 않은 사용자 입니다.'
  })
}

const decode = jwt.verify(accessToken, ACCESS_SECRET, (error, payload) => {
  if(error) {
    return res.status(500).send({
      data: null,
      message: '미안, 다시 시도해 주세요.'
    })
  }else {
    const { id, user_email, password, nickname, profile_img } = payload

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
})

//  cookie: "access_token"

// 사용자가 마이페이지 버튼 onClick (요청)
// 마이페이지 사용자 정보 user_email, password, nickname, profile_img
// user_email, password, nickname, profile_img 얘들을 가져와야 하는데

// 1. sign-in.js에 있는 payload를 가져오는 것
// 2. token을 받는 것 -> 복호화

// 백엔드 -> 클라 (send.body에 담아서 보내면 클라에서 처리)
};