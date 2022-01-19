// email 형식에 맞는지 체크
const emailCheck = (email) => {
  let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailReg.test(email)) return true;
  else return false;
}

// 숫자, 영어, 특수문자 포함하여 8글자 이상 16글자 이하
const passwordCheck1 = (pwd) => {
  let pwdReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
  if (pwdReg.test(pwd)) return true;
  else return false;
}

// 같은 문자 연속 3번
const passwordCheck2 = (pwd) => {
  let pwdReg = /(\w)\1\1/
  if (pwdReg.test(pwd)) return true;
  else return false;
}

export { emailCheck, passwordCheck1, passwordCheck2 };