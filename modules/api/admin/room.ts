import { NextApiRequest, NextApiResponse } from 'next'
import { getPrisma } from 'modules/utils'
import { Room } from '@prisma/client'

export async function getAllRooms() {
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
    useStaticEq,
  } = content ?? req.body

  return getPrisma().room.create({
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
        connect: useStaticEq,
      },
    },
  })
}

export async function deleteRoom(req: NextApiRequest, res: NextApiResponse, content?: any) {
  const { id, deleteStaticEquipment } = content ?? req.body

  let deletedEq = null
  if (deleteStaticEquipment) {
    deletedEq = await getPrisma().staticEquipment.deleteMany({
      where: {
        roomId: id,
      },
    })
  }
  const deletedRoom = await getPrisma().room.delete({
    where: { id },
  })
  return { deletedEq, deletedRoom }
}

export async function updateRoom(req: NextApiRequest, res: NextApiResponse, content?: any) {
  const { id, name, description, building, floor, area, price, bookingOpen, parentRoomId } =
    content ?? req.body

  return getPrisma().room.update({
    where: { id },
    data: {
      name,
      description,
      area,
      price,
      building,
      floor,
      bookingOpen,
      parentRoomId,
    },
  })
}

export async function perform(req: NextApiRequest, res: NextApiResponse, content?: any) {
  const {
    roomsAdded,
    roomsEdited,
    roomsRemoved,
  }: { roomsAdded: Room[]; roomsEdited: Room[]; roomsRemoved: Room[] } = content ?? req.body
  await Promise.all(roomsAdded.map((room) => createRoom(req, res, room)))
  await Promise.all(roomsEdited.map((room) => updateRoom(req, res, room)))
  await Promise.all(roomsRemoved.map((room) => deleteRoom(req, res, room)))

  return getAllRooms()
}
