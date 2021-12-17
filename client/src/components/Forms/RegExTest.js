const emailCheck = (email) => {
  let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailReg.test(email)) return true;
  else return false;
}

const passwordCheck = (pwd) => {
  let pwdReg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
  if (pwdReg.test(pwd)) return true;
  else return false;
}

export { emailCheck, passwordCheck };