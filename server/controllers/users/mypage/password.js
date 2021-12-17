const { user } = require("../../../models");
const jwt = require('jsonwebtoken')
const ACCESS_SECRET = process.env.ACCESS_SECRET
const HS256 = { algorithm: "HS256" }

module.exports = async (req, res) => {

  let accessToken = req.cookies.accessToken
  const payload = jwt.verify(accessToken, ACCESS_SECRET)

  const { old_password, new_password } = req.body
  const { user_email, password } = payload
  const userInfo = await user.findOne({
    where: { user_email: user_email, password: password }
  })

  if(userInfo.password !== old_password) {
    return res.status(400).send({
      data: null,
      message: '비밀번호를 확인해 주십시오.'
    })
  }

  if(old_password !== password) {
    return res.status(400).send({
      data: null,
      message: '현재 비밀번호가 틀렸습니다.'
    })
  }

  if(old_password === new_password) {
    return res.status(400).send({
      data: null,
      message: '현재 비밀번호과 바꿀 비밀번호가 같습니다. 다시 입력해주세요'
    })
  }

  // DB업데이트
  await user.update(
    {
      password: new_password
    },
    {
      where: { user_email: user_email, password: old_password }
    }
  )

  // 사용자 정보의 password를 new_password로 바꿔준다.
  payload.password = new_password

  // 기존토큰 폐기 후 새로운 토큰 발급
  accessToken = jwt.sign(payload, ACCESS_SECRET, HS256)
  const cookie = {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  }

  // res.cookie('accessToken', accessToken, cookie)
  return res.status(200).cookie('accessToken', accessToken).send({
    data: payload,
    message: '비밀번호 변경 완료'
  })
};
