import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getPrisma } from 'modules/utils'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) return null
        const user = await getPrisma().user.findUnique({
          select: {
            email: true,
            firstname: true,
            lastname: true,
            isAdmin: true,
            isVerified: true,
          },
          where: { email: credentials.email },
        })
        if (!user || !user.isVerified) return null
        return user
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) { // user object is not undefined only during the first connection
        token.isAdmin = user.isAdmin
        token.firstname = user.firstname
        token.lastname = user.lastname
      }
      return token
    },
    session: ({ session, token}) => {
      if (token) {
        session.user = {
          ...session.user,
          isAdmin: token.isAdmin,
          firstname: token.firstname,
          lastname: token.lastname,
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

export default NextAuth(authOptions)
