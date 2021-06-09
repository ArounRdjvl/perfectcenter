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
            },
            text:{
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
            fontFamily: "fonts/LouisGeorgeCafe/"
        },
    })
}