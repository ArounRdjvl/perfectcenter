import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'

export function AdminNavigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Page Admin</Typography>

        <Button color="inherit">Salles</Button>
        <Link href="/">
          <Button color="inherit">retourner sur le site</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
