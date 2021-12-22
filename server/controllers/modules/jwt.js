// JWT토큰 인증방식에 관한 함수, 선언 모듈화

require('dotenv').config()
const jwt = require('jsonwebtoken')
const { sign, verify } = require('jsonwebtoken')
const ACCESS_SECRET = process.env.ACCESS_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const accessSignOptional = { algorithm: 'HS256', expiresIn: '1h' }
const refreshSignOptional = { algorithm: 'HS256', expiresIn: '72h' }

module.exports = {
    generatedAccessToken: (payload) => {
        const accessToken = sign(payload, ACCESS_SECRET, accessSignOptional)
        return accessToken
    },
    generatedRefreshToken: (payload) => {
        const refreshToken = sign(payload, REFRESH_TOKEN, refreshSignOptional)
    },
    accessTokenDecoded: (token) => {
        const payload = verify(token, ACCESS_SECRET)
        return payload
    },
    refreshTokenDecoded: (token) => {
        const payload = verify(token, REFRESH_TOKEN)
    },
    isAccessToken: (res) => {
        return res.status(401).send({
            data: null,
            message: '인증되지 않은 사용자 입니다.'
        })      
    },
}