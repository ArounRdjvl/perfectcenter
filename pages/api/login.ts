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
    const { username, password } = req.body

    const user = await prisma.user.findUnique({
        select: {
            email: true,
            username: true,
            password: true,
            isAdmin: true
        },
        where: {
            username: username
        }
    })

    console.log(user)

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            token: jwt.sign(
                {
                    username: user.username,
                    email: user.email,
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
