import { ThemeProvider } from '@material-ui/styles'
import { getTheme } from 'modules/theme'
import { CssBaseline } from '@material-ui/core'
import { useEffect } from 'react'
import { analytics } from 'modules/utils'

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  useEffect(() => {
    analytics.page()
  }, [])
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
