import { ThemeProvider } from '@mui/material'
import { getTheme } from '../modules/theme'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
