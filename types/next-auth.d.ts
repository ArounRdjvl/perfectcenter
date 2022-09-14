import { DefaultSession } from 'next-auth'

interface AugmentedUser {
  isAdmin: boolean
  firstname: string
  lastname: string
}

declare module 'next-auth' {
  interface User extends DefaultSession.user, AugmentedUser {}

  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends AugmentedUser {}
}
