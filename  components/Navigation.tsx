import Link from "next/link"
import React from "react"
import {
    Button,
    Menu,
    AppBar,
    MenuItem,
    Fade,
    Container
} from "@material-ui/core"

const heightHeader = 90

export interface NavigationProps {
    displayLogo?: boolean
}

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
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    // pas fou comme code mais next galère avec les classnames react
    const styleBoxShadow = {}
    if (!shadow) {
        styleBoxShadow.boxShadow = "none"
    }

    return (
        <>
            {displayLogo && <div style={{ position: "fixed", width: "100%", top: 0, left: 0 }}>
                <img
                    src=".\Logo.png"
                    height={heightHeader}
                    style={{ display: "block", margin: "auto" }}
                />
            </div>}
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
                        justifyContent: "space-between"
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
                            <MenuItem>Company</MenuItem>
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
                        <Button>PerfectCorporate</Button>
                        <Button>PerfectCare</Button>
                        <Button>PerfectCircle</Button>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}
