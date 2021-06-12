import React from "react"
import { Button, Container, Link, Typography } from "@material-ui/core"
import animation from "../assets/logo404.json"
import Lottie from "react-lottie"

export default function Home() {
    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animation
    }

    return (
        <Container style={{ display: "flex", height: "100%" }}>
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
                        width: 200
                    }}
                >
                    <Lottie
                        options={bodymovinOptions}
                        style={{ margin: "auto" }}
                    />
                </div>
                <Typography align="center" variant="h1">
                    Error 404 : Stay Calm, Everything's good.
                </Typography>

                <Link href="/" style={{ marginTop: "1rem" }}>
                    <Button variant="contained" color="secondary" size="large">
                        Accueil
                    </Button>
                </Link>
            </div>
        </Container>
    )
}
