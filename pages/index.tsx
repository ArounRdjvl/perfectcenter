import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { AnimatedLogo } from "../ components/index/animation/AnimatedLogo"
import { Animations } from "../ components/index/animation/Animations"
import {
    Container,
    Grid,
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
import { Divider2 } from " components/Dividder2"

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

            <Container>
                <Valeurs />
                <WelcomeMsg />
                <Divider2 />
                <Services />
                <Divider2 />
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}
