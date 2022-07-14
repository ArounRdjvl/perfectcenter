// might not be used for admin command
import { NextApiRequest, NextApiResponse } from 'next'
import { getPrisma } from 'modules/utils'
import bcrypt from 'bcrypt'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export async function register(req: NextApiRequest, res: NextApiResponse) {
  const { email, firstname, lastname, plainPassword, confirmPassword, address } = req.body

  if (plainPassword !== confirmPassword) {
    res.status(403).json({
      error: 'passwords missmatching',
      message: "le mot de passe n'est pas identique à sa confirmation",
    })
    return
  }
  if (!email.match(EMAIL_REGEX)) {
    res.status(403).json({
      error: 'wrong email format',
      message: "l'adresse email est au mauvais format",
    })
    return
  }
  const hash = await bcrypt.hash(plainPassword, 10)

  const user = await getPrisma().user.create({
    data: {
      email,
      firstname,
      lastname,
      address,
      password: hash,
    },
  })

  res.json(user)
}
