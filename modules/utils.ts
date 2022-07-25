import { Secret } from 'jsonwebtoken'
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const KEY = process.env.KEY as Secret

export const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: 'G-F03RRE4ZWZ',
    }),
  ],
})
