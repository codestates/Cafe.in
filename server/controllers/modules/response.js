// 응답모듈
require("dotenv").config();

module.exports = {
  failedResponse: (res, failedCode, type, failedMessage) => {
    return res.status(failedCode).send({
      data: null,
      type,
      message: failedMessage,
    });
  },
};
