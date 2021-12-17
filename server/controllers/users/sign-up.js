const { user } = require("../../models");

module.exports = async (req, res) => {
  const { user_email, password, nickname } = req.body
  let { profile_img } = req.body

  if(!user_email || !password || !nickname) {
    return res.status(400).send({
      data: null,
      message: '모두 입력하세요.'
    })
  }

  // 데이터베이스랑 비교
  const isEmail = await user.findOne({
    where: { user_email: user_email }
  })

  if(isEmail) {
    return res.status(400).send({
      data: null,
      message: '이미 존재하는 email 입니다.'
    })
  }

  const isNickname = await user.findOne({
    where: { nickname: nickname }
  })

  if(isNickname) {
    return res.status(400).send({
      data: null,
      message: '이미 존재하는 nickname 입니다.'
    })
  }

  // 유효성 검증(정규식)
  // user_email

  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  if(!regEmail.test(user_email)) {
    return res.status(400).send({
      data: null,
      message: '형식에 맞는 email을 작성하세요.'
    })
  }

  // password
  const regPassword1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

  if (!regPassword1.test(password)) {
    return res.status(400).send({
      data: null,
      message: "비밀번호는 영문, 숫자, 특수문자로 이루어진 8~16자 입니다"
    })
  }
  const regPassword2 = /(\w)\1\1/

  if (regPassword2.test(password)) {
    return res.status(400).send({
      data: null,
      message: "같은 문자, 숫자는 2번만"
    })
  }

  // nickname
  const regNickname = /^[a-zA-Z0-9]{4,12}$/

  if(!regNickname.test(nickname)) {
    return res.status(400).send({
      data: null,
      message: 'nickname은 영문 및 숫자로만 구성이 되며, 길이는 4~12자 입니다.'
    })
  } 
  
  if(!profile_img) {
    profile_img = 'http://placeimg.com/640/480/any'

    await user.create({
      user_email: user_email,
      password: password,
      nickname: nickname,
      profile_img: profile_img
    })

    return res.status(201).send({
      data: {
        user_email,
        password,
        nickname,
        profile_img
      },
      message: '회원가입을 축하드립니다. (기본 profile_img)'
    })
  }else {
    await user.create({
      user_email: user_email,
      password: password,
      nickname: nickname,
      profile_img: profile_img
    })

    return res.status(201).send({
      data: {
        user_email,
        password,
        nickname,
        profile_img
      },
      message: '회원가입을 축하합니다.'
    })
  }
}
