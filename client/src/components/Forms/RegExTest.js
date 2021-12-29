const emailCheck = (email) => {
  let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailReg.test(email)) return true;
  else return false;
}

const passwordCheck1 = (pwd) => {
  let pwdReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
  if (pwdReg.test(pwd)) return true;
  else return false;
}

const passwordCheck2 = (pwd) => {
  let pwdReg = /(\w)\1\1/
  if (pwdReg.test(pwd)) return true;
  else return false;
}

export { emailCheck, passwordCheck1, passwordCheck2 };