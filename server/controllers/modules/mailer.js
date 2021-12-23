const nodemailer = require('nodemailer')
const NODEMAILER_USER = process.env.NODEMAILER_USER
const NODEMAILER_PASS = process.env.NODEMAILER_PASS
const { sendMail } = require('nodemailer')

module.exports = {
    transporter: nodemailer.createTransport({
        // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이라서 gmail
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: NODEMAILER_USER || 1234,
            pass: NODEMAILER_PASS || 1234
        }
    }),
    from: NODEMAILER_USER,
    // googleSendMail: async (to, subject, text) => {
    //     const mailInfo = this.transporter.sendMail({
    //         from: `"Team Caffeine" <${NODEMAILER_USER}>`,
    //         to: to,
    //         subject: subject,
    //         text: text
    //     })
    // }

}