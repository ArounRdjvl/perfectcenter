import { NextApiRequest, NextApiResponse } from 'next'
import { getPrisma } from 'modules/utils'
import { Room } from '@prisma/client'

export async function getAllRooms() {
  return getPrisma().room.findMany()
}

export async function perform(req: NextApiRequest, res: NextApiResponse, content?: any) {
  const {
    roomsAdded,
    roomsEdited,
    roomsRemoved,
  }: { roomsAdded: Room[]; roomsEdited: Room[]; roomsRemoved: Room[] } = content ?? req.body

  // create
  // we cannot use createMany with sqlite
  for (const r of roomsAdded) {
    await getPrisma().room.create({ data: r })
  }

  // edit
  for (const r of roomsEdited) {
    await getPrisma().room.update({
      where: { id: r.id },
      data: r,
    })
  }

  // delete
  await getPrisma().room.deleteMany({ where: { id: { in: roomsRemoved.map((r) => r.id) } } })
  return getPrisma().room.findMany()
}
