import React from "react"
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@material-ui/styles'
import { getTheme } from 'modules/theme'
import { CssBaseline } from '@material-ui/core'
import 'global.css'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType
  pageProps: any
}) {
  const [theme] = React.useState(getTheme())
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: theme.palette.background.default }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
