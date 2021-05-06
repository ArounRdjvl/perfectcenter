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

export function Navigation() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div style={{ position: "absolute", width: "100%", top: 0, left: 0}}>
                <img
                    src=".\Logo.png"
                    height={heightHeader}
                    style={{ display: "block", margin: "auto" }}
                />
            </div>
            <Container>
                <AppBar
                    color="transparent"
                    position="static"
                    style={{ height: heightHeader, boxShadow: "none" }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <Button>Accueil</Button>
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
                                <MenuItem>Team</MenuItem>
                                <MenuItem>Contact</MenuItem>
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
                    </div>
                </AppBar>
            </Container>
        </>
    )
}
