import React from "react"
import {
    Button,
    Menu,
    AppBar,
    MenuItem,
    Fade,
    Container,
    makeStyles,
    Link
} from "@material-ui/core"
import { FiberPin } from "@material-ui/icons"

export const heightHeader = 90

const useStyles = makeStyles((theme) => ({
    boxShadowNone: {
        boxShadow: "none"
    }
}))

export interface NavigationProps {
    displayLogo?: boolean
}

export function Navigation(props: NavigationProps) {
    const displayLogo = props.displayLogo != null ? props.displayLogo : true
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [shadow, setShadow] = React.useState<boolean>(false)

    const classes = useStyles()

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    function handleScroll() {
        if (window.pageYOffset === 0) {
            setShadow(false)
        } else {
            setShadow(true)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {displayLogo && (
                <div
                    style={{
                        position: "fixed",
                        width: 400,
                        left: "50%",
                        marginLeft: -200,
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src="/picto/braket_left.png"
                        height={heightHeader}
                        style={{ maxHeight: "2rem" }}
                    />
                    <Link href="/">
                        <div>
                            <img
                                src=".\Logo.png"
                                height={heightHeader}
                                style={{ display: "block", margin: "0 2rem" }}
                            />
                        </div>
                    </Link>
                    <img
                        src="/picto/braket_right.png"
                        height={heightHeader}
                        style={{ maxHeight: "2rem" }}
                    />
                </div>
            )}
            <div style={{ height: heightHeader, width: "100%" }} />
            <AppBar
                color="transparent"
                position="fixed"
                style={{
                    height: heightHeader,
                    backgroundColor: "#EBEAE8",
                    zIndex: 9
                }}
                className={!shadow ? classes.boxShadowNone : ""}
            >
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        margin: "auto"
                    }}
                >
                    <div>
                        <Link href="/">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                Accueil
                            </Button>
                        </Link>
                        <Link href="/membres">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                Membres
                            </Button>
                        </Link>
                        <Link href="/articles">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                Articles
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                Nous contacter
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link href="/perfectcorporate">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                PerfectCorporate
                            </Button>
                        </Link>
                        <Link href="/perfectcare">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                PerfectCare
                            </Button>
                        </Link>
                        <Link href="/perfectcircle">
                            <Button style={{ margin: "0 5px 0 5px" }}>
                                PerfectCircle
                            </Button>
                        </Link>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}
