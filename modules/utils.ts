import { Secret } from 'jsonwebtoken'
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import { PrismaClient } from '@prisma/client'

export const KEY = process.env.KEY as Secret

const prisma = new PrismaClient()

export const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: 'G-F03RRE4ZWZ',
    }),
  ],
})

export const dev = process.env.NODE_ENV !== 'production'

export const origin = dev ? 'http://localhost:3000' : 'https://perfectcenter.fr'

export function getPrisma() {
  return prisma
}

export default function initMiddleware(
  middleware: (arg0: any, arg1: any, arg2: (result: any) => void) => void
) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
