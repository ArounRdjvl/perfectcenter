import { createMuiTheme } from "@material-ui/core"
import LouisGeorgeCafe from "../assets/fonts/LouisGeorgeCafe.ttf"
import LouisGeorgeCafeItalic from "../assets/fonts/LouisGeorgeCafe-Italic.ttf"

const fontFace = [
    /* ne fonctionne pas pour l'instant
    {
        fontFamily: "louisGeorgeCafe",
        fontStyle: "normal",
        fontWeight: "normal",
        src: `url(${LouisGeorgeCafe})`
    },
    {
        fontFamily: "louisGeorgeCafe",
        fontStyle: "italic",
        fontWeight: "normal",
        src: `url(${LouisGeorgeCafeItalic})`
    },
    */
]

export function getTheme() {
    return createMuiTheme({
        palette: {
            primary: {
                main: "#3B424A"
            },
            secondary: {
                main: "#849994",
                contrastText: "#fff"
            },
            text: {
                primary: "#3B424A",
                secondary: "#EBEAE8"
            }
        },
        typography: {
            h1: {
                fontSize: "2rem"
            },
            h2: {
                fontSize: "1.8rem"
            },
            h3: {
                fontSize: "1.6rem"
            },
            fontFamily: "Louis George Café, sans-serif"
        },
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    "html,body,body > div:first-child,div#__next,div#__next > div":
                        {
                            height: "100%"
                        },
                    "@font-face": fontFace
                }
            }
        }
    })
}
