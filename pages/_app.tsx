import { ThemeProvider } from '@material-ui/styles'
import { getTheme } from 'modules/theme'
import { CssBaseline } from '@material-ui/core'
import { useEffect } from 'react'
import { analytics } from 'modules/utils'
import 'global.css'

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  useEffect(() => {
    analytics.page()
  }, [])
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
