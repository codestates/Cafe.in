// 정규식에 관한 함수, 선언 모듈화

require('dotenv').config()

module.exports = {
    registerEmail: (email) => {
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
        return regEmail.test(email)
    },
    registerPW1: (password) => {
        const regPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
        return regPassword.test(password)
    },
    registerPW2: (password) => {
        const regPassword = /(\w)\1\1/
        return regPassword.test(password)
    },
    registerNickname: (nickname) => {
        const regNickname = /^[a-zA-Z0-9]{4,12}$/
        return regNickname.test(nickname)
    }
}