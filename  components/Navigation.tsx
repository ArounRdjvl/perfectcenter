import Link from "next/link"
import React from "react"
import {
    Button,
    Menu,
    AppBar,
    MenuItem,
    Fade,
    Container,
    Typography,
    withStyles
} from "@material-ui/core"
import { FiberPin } from "@material-ui/icons"
const heightHeader = 90

export interface NavigationProps {
    displayLogo?: boolean
}

const PerfectButton = withStyles({
    root: {
        fontFamily: "fonts/LouisGeorgeCafe",
        textTransform: "none",
        fontSize: 18,
        marginTop:"1rem"
    }
})(Button)

const PerfectSubButton = withStyles({
    root:{
        marginTop:0,
    }
})(PerfectButton)

export function Navigation(props: NavigationProps) {
    const displayLogo = props.displayLogo != null ? props.displayLogo : true
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [shadow, setShadow] = React.useState<boolean>(false)

    function handleClick(event) {
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

    // pas fou comme code mais next galère avec les classnames react
    const styleBoxShadow = {}
    if (!shadow) {
        styleBoxShadow.boxShadow = "none"
    }

    return (
        <>
            {displayLogo && (
                <div
                    style={{
                        position: "fixed",
                        width: "100%",
                        top: 0,
                        left: 0
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
                    zIndex: 9,
                    ...styleBoxShadow
                }}
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
                            <PerfectButton>Accueil</PerfectButton>
                        </Link>
                        <PerfectButton onClick={handleClick}>
                            A propos
                        </PerfectButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem>
                                <Link href="/membres">
                                    <PerfectSubButton>Membre</PerfectSubButton>
                                </Link>
                            </MenuItem>
                        </Menu>
                        <PerfectButton>Articles</PerfectButton>
                        <Link href="/contact">
                            <PerfectButton>Nous contacter</PerfectButton>
                        </Link>
                    </div>

                    <div>
                        <Link href="/">
                            <PerfectButton>PerfectCorporate</PerfectButton>
                        </Link>
                        <Link href="/">
                            <PerfectButton>PerfectCare</PerfectButton>
                        </Link>
                        <Link href="/circle">
                            <PerfectButton>PerfectCircle</PerfectButton>
                        </Link>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}
