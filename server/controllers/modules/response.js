// 응답모듈
require('dotenv').config()

module.exports = {
    failedResponse: (res, failedCode, failedMessage) => {
        return res.status(failedCode).send({
            data:null,
            message: failedMessage
        })
    }
}