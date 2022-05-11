import {NextApiRequest, NextApiResponse} from "next";
import {getPrisma} from "modules/utils";

export async function getAllRooms(req: NextApiRequest, res: NextApiResponse) {
    return getPrisma().room.findMany()
}

export async function createRoom(req: NextApiRequest, res: NextApiResponse, content?: any) {
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
    } = content ?? req.body

    const room = await getPrisma().room.create({
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
    return room
}

export async function deleteRoom(req: NextApiRequest, res: NextApiResponse, content?: any) {
    const {id, deleteStaticEquipment} = content ?? req.body

    let deletedEq = null
    if (deleteStaticEquipment) {
        deletedEq = await getPrisma().staticEquipment.deleteMany({
            where: {
                roomId: id
            }
        })
    }
    const deletedRoom = await getPrisma().room.delete({
        where: {id}
    })
    return {deletedEq, deletedRoom}
}

export async function updateRoom(req: NextApiRequest, res: NextApiResponse, content?: any) {
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
    } = content ?? req.body

    const room = await getPrisma().room.update({
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
    return room
}

export async function perform(req: NextApiRequest, res: NextApiResponse, content?: any) {
    const {roomsAdded, roomsEdited, roomsRemoved} = content ?? req.body
    for (const room of roomsAdded) {
        await createRoom(req, res, room)
    }
    for (const room of roomsEdited) {
        await updateRoom(req, res, room)
    }
    for (const room of roomsRemoved) {
        await deleteRoom(req, res, room)
    }
    return getAllRooms(req, res)
}
