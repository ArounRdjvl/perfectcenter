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
import { Newsletter } from " components/Newsletter"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link, animateScroll as scroll } from "react-scroll"
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll"

export const useStyles = makeStyles((theme) => {
    return {
        buttonStyles: { position: "relative", zIndex: 3 },
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
                    marginTop: "-10rem",
                    marginBottom: "5rem"
                }}
            >
                <Link
                    activeClass="active"
                    to="container"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                >
                    <IconButton className={classes.buttonStyles}>
                        <ExpandMoreIcon />
                    </IconButton>
                </Link>
            </div>

            <Container id="container">

                <Valeurs />
                <WelcomeMsg />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "3rem 0 3rem 0"
                    }}
                >
                    <img
                        src="picto/Separateur.png"
                        width={250}
                        style={{ zIndex: 2 }}
                    />
                </div>
                <Services />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "6rem 0 4rem 0"
                    }}
                >
                    <img
                        src="picto/Separateur.png"
                        width={250}
                        style={{ zIndex: 2 }}
                    />
                </div>
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}
