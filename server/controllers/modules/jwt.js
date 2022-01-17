// JWT토큰 인증방식에 관한 함수, 선언 모듈화

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { sign, verify } = require("jsonwebtoken");
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// const accessSignOptional = { algorithm: 'HS256', expiresIn: '1h' }
// const refreshSignOptional = { algorithm: 'HS256', expiresIn: '72h' }
const accessSignOptional = { algorithm: "HS256", expiresIn: "1h" };
const refreshSignOptional = { algorithm: "HS256" };

module.exports = {
  generatedAccessToken: (payload) => {
    const accessToken = sign(payload, ACCESS_SECRET, accessSignOptional);
    return accessToken;
  },
  generatedRefreshToken: (payload) => {
    const refreshToken = sign(payload, REFRESH_TOKEN, refreshSignOptional);
  },
  accessTokenDecoded: (token) => {
    try {
      const payload = verify(token, ACCESS_SECRET);
      return payload;
    } catch (e) {
      if (e.name === "TokenExpiredError") return "null";
      //if (e.name === "JsonWebTokenError") return "needToLogin";
      return e.name;
    }
  },
  refreshTokenDecoded: (token) => {
    const payload = verify(token, REFRESH_TOKEN);
  },
  isAccessToken: (res) => {
    return res.status(401).send({
      type: "needToLogin",
      data: null,
      message: "로그인 후 마음에 드는 태그에 좋아요를 눌러보세요",
    });
  },
};
