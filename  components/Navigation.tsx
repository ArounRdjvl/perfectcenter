import Link from "next/link"
import React from "react"
import {
    Button,
    Menu,
    AppBar,
    MenuItem,
    Fade,
    Container,
    makeStyles
} from "@material-ui/core"
import { FiberPin } from "@material-ui/icons"

const heightHeader = 90

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
                        zIndex: 10
                    }}
                >
                    <img
                        src=".\Logo.png"
                        height={heightHeader}
                        style={{ display: "block", margin: "auto" }}
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
                        flexDirection: "row"
                    }}
                >
                    <div>
                        <Link href="/">
                            <Button>Accueil</Button>
                        </Link>
                        <Button onClick={handleClick}>A propos</Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem>
                                <Link href="/membres">Membres</Link>
                            </MenuItem>
                        </Menu>
                        <Button>Articles</Button>
                        <Link href="/contact">
                            <Button>Nous contacter</Button>
                        </Link>
                    </div>

                    <div>
                        <Link href="/">
                            <Button>PerfectCorporate</Button>
                        </Link>
                        <Link href="/">
                            <Button>PerfectCare</Button>
                        </Link>
                        <Link href="/circle">
                            <Button>PerfectCircle</Button>
                        </Link>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}
