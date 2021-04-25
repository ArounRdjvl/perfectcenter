const nodemailer = require("nodemailer")
const dev = process.env.NODE_ENV !== 'production'

export async function sendMail(from : string, subject : string, content : string) {

    let authOptions
    if(dev) {
        let testAccount = await nodemailer.createTestAccount()
        authOptions = {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            }
        }
    } else {
        authOptions = {
            host: "smtp.hades.ovh",
            port: 587,
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.EMAIL_USR,
                pass: process.env.EMAIL_PWD
            }
        }
    }

    let transporter = nodemailer.createTransport(authOptions)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from , // sender address
        to: "contact@hades.ovh", // list of receivers
        subject: `[site] : ${subject}`, // Subject line
        text: content, // plain text body
    })

    console.log("Message sent: %s", info.messageId)

    if (dev)
        console.log("DEV MODE : Preview URL: %s", nodemailer.getTestMessageUrl(info))
}
