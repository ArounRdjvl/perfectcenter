import { createMuiTheme } from "@material-ui/core"

export const colors = {
    beige: "#E3CCB4",
    noir: "#3B424A",
    vert: "#849994"
}

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
            h4: {
                fontSize: "1.4rem"
            },
            fontFamily: "Louis George Café, sans-serif"
        },
        overrides: {
            MuiButton: {
                root: {
                    borderRadius: 30,
                    textTransform: "none"
                }
            },
            MuiFormLabel: {
                root: {
                    color: "#3B424A"
                }
            },
            MuiInput: {
                underline: {
                    "&:before, &:after ,&:hover:not(.Mui-disabled):before": {
                        borderBottomColor: colors.vert
                    }
                }
            },
            MuiCssBaseline: {
                "@global": {
                    "html,body,body > div:first-child,div#__next":
                    {
                        backgroundColor: "#EBEAE8"
                    },
                    a: {
                        color: "inherit",
                        textDecoration: "none"
                    }
                }
            }
        }
    })
}
