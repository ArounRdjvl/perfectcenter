import { ThemeProvider } from "@material-ui/styles"
import { getTheme } from "../modules/theme"
import { CssBaseline } from "@material-ui/core"
import { Background } from "../ components/Background"

function MyApp({
    Component,
    pageProps
}: {
    Component: React.ComponentType
    pageProps: any
}) {
    return (
        <ThemeProvider theme={getTheme()}>
            <CssBaseline />
            <Background />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
