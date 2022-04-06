import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "modules/utils";

export async function getAllRooms(req: NextApiRequest, res: NextApiResponse) {
    res.json(prisma.room.findMany())
}

export async function createRoom(req: NextApiRequest, res: NextApiResponse) {
    const {
        name,
        description,
        building,
        floor,
        area,
        price,
        bookingOpen,
        parentRoomId,
        createStaticEq,
        useStaticEq
    } = req.body

    const room = await prisma.room.create({
        data: {
            name,
            description,
            area,
            price,
            building,
            floor,
            bookingOpen,
            parentRoomId,
            staticEquipments: {
                create: createStaticEq,
                connect: useStaticEq
            }
        }
    })
    res.json(room)
}

export async function deleteRoom(req: NextApiRequest, res: NextApiResponse) {
    const {id, deleteStaticEquipment} = req.body

    let deletedEq = null
    if (deleteStaticEquipment) {
        deletedEq = await prisma.staticEquipment.deleteMany({
            where: {
                roomId: id
            }
        })
    }
    const deletedRoom = await prisma.room.delete({
        where: {id}
    })
    res.json({deletedEq, deletedRoom})
}

export async function updateRoom(req: NextApiRequest, res: NextApiResponse) {
    const {
        id,
        name,
        description,
        building,
        floor,
        area,
        price,
        bookingOpen,
        parentRoomId,
    } = req.body

    const room = await prisma.room.update({
        where: {id},
        data: {
            name,
            description,
            area,
            price,
            building,
            floor,
            bookingOpen,
            parentRoomId,
        }
    })
    res.json(room)
}
