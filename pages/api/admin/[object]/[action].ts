import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import Cors from 'cors'
import { getAllRooms, createRoom, deleteRoom, updateRoom, perform } from 'modules/api/admin/room'
import initMiddleware, { getPrisma } from 'modules/utils'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST'],
  })
)

export async function createMember(req: NextApiRequest) {
  const { existingUserId, email, firstname, lastname, rcp, siret } = req.body

  if (existingUserId) {
    const user = getPrisma().user.update({
      where: { id: existingUserId },
      data: {
        member: {
          create: {
            rcp,
            siret,
          },
        },
      },
    })
    // TODO: create token and send email invites
    return user
  }
  const user = getPrisma().user.create({
    data: {
      email,
      firstname,
      lastname,
      member: {
        create: {
          rcp,
          siret,
        },
      },
    },
  })
  // TODO: notify by email
  return user
}

const handlers: {
  [object: string]: {
    [action: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<object>
  }
} = {
  room: {
    all: getAllRooms,
    create: createRoom,
    delete: deleteRoom,
    update: updateRoom,
    perform,
  },
  member: {
    create: createMember,
  },
}

export default async function hander(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res)

  const { object, action } = req.query

  if (typeof object !== 'string' || typeof action !== 'string') {
    res.status(404).json({ status: 'not found' })
    return
  }

  if (!handlers[object]?.[action]) {
    res.status(404).json({ status: 'not found' })
    return
  }
  try {
    res.json(await handlers[object][action](req, res))
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(400).json({ code: e.code, meta: e.meta })
    } else {
      console.error(e)
      res.status(400).end()
    }
  }
}
