import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { AnimatedLogo } from "../ components/index/animation/AnimatedLogo"
import { Animations } from "../ components/index/animation/Animations"
import { Container, IconButton, makeStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { Services } from "../ components/index/Services"
import { Valeurs } from "../ components/index/Valeurs"
import { Newsletter } from " components/index/Newsletter"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link, animateScroll as scroll } from "react-scroll"
import { DecouvertePraticiens } from " components/index/DecouvertePraticiens"

export const useStyles = makeStyles((theme) => {
    return {
        buttonStyles: { position: "relative", zIndex: 3 },
        itemStyle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        imageHandleStyle: {
            flexGrow: 1,
            display: "flex",
            width: "6rem",
            height: "6rem",
        },
    }
})

export default function index() {
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
                    marginBottom: "5rem",
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
                    <IconButton
                        color="primary"
                        className={classes.buttonStyles}
                    >
                        <ExpandMoreIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            <div id="container" />
            <Valeurs />
            <Container>
                <Services />
            </Container>
            <DecouvertePraticiens />
            <Container>
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}
