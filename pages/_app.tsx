import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { getTheme } from 'modules/theme'
import React from 'react'
import 'global.css'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType
  pageProps: any
}) {
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      <ThemeProvider theme={getTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
