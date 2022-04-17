import { ThemeProvider } from '@material-ui/styles'
import { getTheme } from '../modules/theme'
import { CssBaseline } from '@material-ui/core'

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
