import {NextApiRequest, NextApiResponse} from "next";
import {Prisma} from "@prisma/client"
import {
    getAllRooms,
    createRoom,
    deleteRoom,
    updateRoom
} from "modules/api/admin/room"
import {prisma} from "../../../../modules/utils";

export default async function hander(req: NextApiRequest, res: NextApiResponse) {
    const {object, action} = req.query

    if (typeof object !== "string" || typeof action !== "string") {
        res.status(404).json({status: "not found"})
        return
    }

    if (!handlers[object]?.[action]) {
        res.status(404).json({status: "not found"})
        return
    }
    //console.info("performing request : ", req)
    try {
        await handlers[object][action](req, res)
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({code: e.code, meta: e.meta})
        } else {
            console.error(e)
            res.status(400).end()
        }
    }
}

export async function createMember(req: NextApiRequest, res: NextApiResponse) {
    const {existingUserId, email, firstname, lastname, rcp, siret} = req.body

    if (existingUserId) {
        const user = prisma.user.update({
            where: {id: existingUserId},
            data: {
                member: {
                    create: {
                        rcp, siret
                    }
                }
            }
        })
        //TODO: create token and send email invites
        res.json(user)
    } else {
        const user = prisma.user.create({
            data: {
                email,
                firstname,
                lastname,
                member: {
                    create: {
                        rcp, siret
                    }
                }
            }
        })
        //TODO: notify by email
        res.json(user)
    }
}

const handlers: {
    [object: string]: {
        [action: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>
    }
} = {
    room: {
        all: getAllRooms,
        create: createRoom,
        delete: deleteRoom,
        update: updateRoom
    },
    member: {
        create: createMember
    }
}