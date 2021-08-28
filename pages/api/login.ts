import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { KEY } from "modules/utils"

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404
        res.end("Error")
        return
    }
    const { username, password } = req.body

    // TODO currently accepting connexion from everyone
    // waiting to setup database
    // if user = admin & password = admin then it's an admin
    res.json({
        token: jwt.sign({
            username: username,
            admin: username === "admin" && password === "admin"
        }, KEY)
    })
}
