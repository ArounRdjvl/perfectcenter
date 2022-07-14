import { useRouter } from 'next/router'
import { AdminNavigation } from '../components/admin/AdminNavigation'
import { Rooms } from '../components/admin/Rooms'

export default function Admin() {
  useRouter()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AdminNavigation />
      <Rooms style={{ flex: 1 }} />
    </div>
  )
}
