import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const client = new PrismaClient()

  const rooms = await client.room.findMany()
  res.send(rooms)
}
