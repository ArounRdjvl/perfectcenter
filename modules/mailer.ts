import nodemailer from 'nodemailer'

import { dev } from './utils'

const defaultEmail = process.env.EMAIL_USR ?? ''

export async function sendMail(
  subject: string,
  content: string,
  from: string = defaultEmail,
  to: string = defaultEmail
) {
  let authOptions
  if (dev) {
    const testAccount = await nodemailer.createTestAccount()
    authOptions = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    }
  } else {
    authOptions = {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.EMAIL_USR,
        pass: process.env.EMAIL_PWD,
      },
    }
  }

  const transporter = nodemailer.createTransport(authOptions)

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject: `[site] : ${subject}`, // Subject line
    text: content, // plain text body
  })

  console.info('Message sent: %s', info.messageId)

  if (dev) console.info('DEV MODE : Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
