import { createMuiTheme } from "@material-ui/core";

export function getTheme() {
    return createMuiTheme({
        palette: {
            primary: {
                main: "#3B424A"
            },
            secondary: {
                main: "#849994",
                contrastText: "#fff"
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
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          },
    })
}