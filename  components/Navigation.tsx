import React from "react"
import {
    Button,
    Menu,
    AppBar,
    MenuItem,
    Fade,
    Container,
    makeStyles,
    Link,
    useMediaQuery,
    useTheme,
    IconButton,
    Popover,
    Divider
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import MenuOpenIcon from "@material-ui/icons/MenuOpen"
import { animated, config, useSpring } from "react-spring"

export const heightHeader = 90

const useStyles = makeStyles((theme) => ({
    boxShadowNone: {
        boxShadow: "none"
    },
    buttonMobile: {
        width: "100%",
        height: "100%"
    }
}))

export interface NavigationProps {
    displayLogo?: boolean
}

const vhToPixel = (value: number) => (window.innerHeight * value) / 100

export function Navigation(props: NavigationProps) {
    const displayLogo = props.displayLogo != null ? props.displayLogo : true
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [shadow, setShadow] = React.useState<boolean>(false)

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

    const theme = useTheme()
    const classes = useStyles()

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

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

    const ref = React.useRef<HTMLDivElement>(null)

    const springProps = useSpring({
        height: menuOpen ? vhToPixel(100) : heightHeader,
        config: config.default,
        onRest: () => {
            if (menuOpen && ref.current) {
                ref.current.style.height = "100vh"
            }
        }
    })

    if (isMobile) {
        return (
            <>
                <div style={{ height: heightHeader, width: "100%" }} />
                <AppBar
                    color="transparent"
                    position="fixed"
                    style={{
                        minHeight: heightHeader,
                        backgroundColor: "#EBEAE8",
                        zIndex: 9
                    }}
                    className={!shadow ? classes.boxShadowNone : ""}
                >
                    <animated.div
                        ref={ref}
                        style={{
                            height: springProps.height
                        }}
                    >
                        <Container
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                overflow: "hidden",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    minHeight: "100vh",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div
                                    style={{
                                        height: heightHeader,
                                        display: "flex"
                                    }}
                                >
                                    <IconButton
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {menuOpen ? (
                                            <MenuOpenIcon />
                                        ) : (
                                            <MenuIcon />
                                        )}
                                    </IconButton>
                                </div>
                                <div
                                    style={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Link href="/">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            Accueil
                                        </Button>
                                    </Link>
                                    <Link href="/membres">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            Membres
                                        </Button>
                                    </Link>
                                    <Link href="/articles">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            Articles
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            Nous contacter
                                        </Button>
                                    </Link>
                                    <Divider />
                                    <Link href="/perfectcorporate">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            PerfectCorporate
                                        </Button>
                                    </Link>
                                    <Link href="/perfectcare">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            PerfectCare
                                        </Button>
                                    </Link>
                                    <Link href="/perfectcircle">
                                        <Button
                                            className={classes.buttonMobile}
                                        >
                                            PerfectCircle
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </animated.div>
                </AppBar>
            </>
        )
    }

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
