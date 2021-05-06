import { ThemeProvider } from "@material-ui/styles"
import "../styles/globals.less"
import { getTheme } from "../modules/theme"

function MyApp({
    Component,
    pageProps
}: {
    Component: React.ComponentType
    pageProps: any
}) {
    return (
        <ThemeProvider theme={getTheme()}>
            <div style={{backgroundColor: "#EBEAE8"}}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}

export default MyApp
