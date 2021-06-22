import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Background } from "../ components/Background"
import { Button, Container, Link, Typography } from "@material-ui/core"
import animation from "../assets/logo404.json"
import Lottie from "react-lottie"
import { TitleBar } from "../ components/TitleBar"
import { Footer } from "../ components/Footer"

export default function perfectcorporate() {
    const ref = React.useRef<HTMLDivElement>(null)

    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animation
    }

    return (
        <div ref={ref}>
            <Background elRef={ref} />
            <Head>
                <title>PerfectCorporate</title>
            </Head>
            <Container >
                <Navigation />
                <div
                    style={{
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <div
                        style={{
                            width: 450
                        }}
                    >
                        <Lottie
                            options={bodymovinOptions}
                            style={{ margin: "auto" }}
                        />
                    </div>

                    <TitleBar
                        background={true}
                        title="Page en cours de construction"
                        color="vert"
                    />
                </div>
                <Footer />
            </Container>
        </div>
    )
}
