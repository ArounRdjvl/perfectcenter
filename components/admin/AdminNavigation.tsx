import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export function AdminNavigation() {
  const session = useSession()

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Typography>Page Admin</Typography>

          <Button color="inherit">Salles</Button>
          <Link href="/">
            <Button color="inherit">retourner sur le site</Button>
          </Link>
        </div>

        {session && (
          <div style={{ display: 'flex' }}>
            <Button color="inherit" onClick={() => signOut()}>
              Déconnexion
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
