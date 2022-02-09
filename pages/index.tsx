import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { AnimatedLogo } from "../ components/index/animation/AnimatedLogo"
import { Animations } from "../ components/index/animation/Animations"
import {
    Container,
    Grid,
    IconButton,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core"
import { Divider } from "../ components/Divider"
import { Footer } from "../ components/Footer"
import { Services } from "../ components/index/Services"
import { WelcomeMsg } from "../ components/index/WelcomeMsg"
import { Valeurs } from "../ components/index/Valeurs"
import { Newsletter } from " components/index/Newsletter"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link, animateScroll as scroll } from "react-scroll"
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll"
import { Divider2 } from " components/DividerLogo"
import { WelcomeMsg2 } from " components/PerfectCircle/WelcomeMsg2"
import { DecouvertePraticiens } from " components/index/DecouvertePraticiens"
import { TitleBar } from " components/TitleBar"

export const useStyles = makeStyles((theme) => {
    return {
        buttonStyles: { position: "relative", zIndex: 3},
        itemStyle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end"
        },
        imageHandleStyle: {
            flexGrow: 1,
            display: "flex",
            width: "6rem",
            height: "6rem"
        }
    }
})

export default function index() {
    const theme = useTheme()

    const classes = useStyles()

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Navigation displayLogo={false} />

            <Animations />

            <AnimatedLogo delay={600} />

            <div style={{ height: "100vh" }} />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-9.5rem",
                    marginBottom: "5rem"
                }}
            >
                <Link
                    activeClass="active"
                    to="container"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1500}
                >
                    <IconButton color="primary"  className={classes.buttonStyles}>
                        <ExpandMoreIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            <Container id="container">
            </Container>
            <Valeurs />
            <Container id="container">
                <Services />
            </Container>
                <DecouvertePraticiens />
            <Container id="container">
                <Newsletter />
            </Container>
            <Footer margin="3rem 0 0 0" />
        </div>
    )
}
