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
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
