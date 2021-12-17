const { user } = require("../../models");
const jwt = require('jsonwebtoken')
const ACCESS_SECRET = process.env.ACCESS_SECRET

module.exports = async (req, res) => {

  const accessToken = req.cookies.accessToken
  if(!accessToken) {
    return res.status(400).send({
      data: null,
      message: '유효하지 않은 토큰'
    })
  }else {
    const payload = jwt.verify(accessToken, ACCESS_SECRET)
    // git 주석 12.17(금)
    const { password } = req.body    
    const { user_email } = payload

  const userInfo = await user.findOne({
    where: { user_email: user_email, password: password }
  })

  if(!userInfo) {
    return res.status(400).send({
      data: null,
      message: '올바른 입력 값이 아닙니다.',
      payload: payload,
      userInfo: userInfo,
      accessToken: accessToken
    })
  }

  await user.destroy({
    where: { user_email: user_email, password: password }
  })

  return res.status(200).send({
    data: null,
    message: '삭제완료'
  })
  }

  

  

  // const { password } = req.body
  // const decoded = req.cookies.accessToken
  // const payload = jwt.verify(decoded, ACCESS_SECRET, async (error, decode) => {
  //   if(error) {
  //     console.log(error)
  //     return res.status(400).send({
  //       data: error,
  //       message: '아무튼 오류'
  //     })
  //   }else {
  //     const { user_email } = decode
  
  //     const userInfo = await user.findOne({
  //       where: { user_email: user_email, password: password }
  //     })

  //     if(!userInfo) {
  //       res.status(400).send({
  //         data: null,
  //         message: '없는 사용자 입니다.'
  //       })
  //     }

  //     await user.destroy({
  //       where: { user_email: user_email, password: password }
  //     })

  //     return res.status(200).send({
  //       data: null,
  //       accessToken: req.headers,
  //       message: '삭제 완료'
  //     })
  //    }
  // })

  
}
