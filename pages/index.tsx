import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import "../styles/Home.module.less"
import { AnimatedLogo } from "../ components/AnimatedLogo"
import { Container, Paper, Typography, useTheme } from "@material-ui/core"


export default function index() {

    const theme = useTheme()

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Navigation displayLogo={false} />

            <AnimatedLogo />
            <div style={{ height: "100%" }}></div>

            <Container>

                <Paper style={{ height: "100rem", padding: theme.spacing(1) }}>
                    <Typography variant="h1">This is content</Typography>
                    <Typography>
                        Deserunt dolore enim consequat anim duis. Non magna minim elit in non non aliquip do in quis dolore veniam tempor. Adipisicing culpa sunt officia amet excepteur tempor veniam laboris excepteur ullamco ex occaecat dolore. Est tempor dolor consectetur aute anim nostrud ullamco quis commodo laboris commodo fugiat excepteur aute.
                    </Typography>
                </Paper>

            </Container>
        </div>
    )
}
