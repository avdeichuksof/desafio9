import nodemailer from 'nodemailer'
import config from "../config/config.js"
const mailAccount = config.mailAccount
const mailPass = config.mailPass

const sendEmail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: mailAccount,
                pass: mailPass
            }
        })

        const mailOptions = {
            from: 'By Sof' + mailAccount,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html
        }

        let message = transporter.sendMail(mailOptions, (err, info) => {
            if(err) console.log(err)
    
            console.log('Message sent: %s', info.messageId)
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
        })

    } catch (err) {
        console.log('Error sending mail', err)
    }
}

export default sendEmail