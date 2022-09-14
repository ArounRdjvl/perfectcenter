import React from 'react'
import { useRouter } from 'next/router'
import { AdminNavigation } from 'components/admin/AdminNavigation'
import { Rooms } from 'components/admin/Rooms'
import { getSession } from 'next-auth/react'

export default function Admin() {
  useRouter()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AdminNavigation />
      <Rooms style={{ flex: 1 }} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // another way to get session, idk the diff
  // const session = await unstable_getServerSession(context.req, context.res, authOptions)
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }
  if (!session.user.isAdmin) {
    return {
      notFound: true
    }
  }
  return {
    props: {}
  }
}
