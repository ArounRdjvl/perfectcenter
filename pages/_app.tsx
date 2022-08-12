import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { getTheme } from 'modules/theme'
import React from 'react'
import 'global.css'

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return (
    <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
