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
