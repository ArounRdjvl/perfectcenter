import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { KEY } from "modules/utils"

// component used to test token
export default function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404
        res.end("Error")
        return
    }
    const { token } = req.body

    try {
        jwt.verify(token, KEY)
    } catch (e) {
        console.log("wrong token")
        res.statusCode = 400
        res.end("Error")
        return 
    }
    console.log("ok")
    res.send("token ok")
}
