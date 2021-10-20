import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { KEY } from "modules/utils"
import { PrismaClient } from "@prisma/client"
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404
        res.end("Error")
        return
    }
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        select: {
            email: true,
            firstname: true,
            lastname: true,
            password: true,
            isAdmin: true
        },
        where: {
            email: email
        }
    })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            token: jwt.sign(
                {
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    admin: user.isAdmin
                },
                KEY
            )
        })
    } else {
        res.json({
            error: "wrong password or user does not exist"
        })
    }
}
