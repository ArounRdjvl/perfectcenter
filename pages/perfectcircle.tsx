import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Divider } from "../ components/Divider"
import { Background } from "../ components/Background"
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import { Coach } from "../ components/Coach"
import CSS from "csstype"
import { CoachProps } from "../ components/Coach"
import { dataCoachs } from "../modules/data"

export default function perfectcircle() {
    const ref = React.useRef<HTMLDivElement>(null)

    const itemStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    }

    const imageHandleStyle: CSS.Properties = {
        flexGrow: 1,
        display: "flex",
        width: "7rem",
        height: "7rem"
    }

    return (
        <div ref={ref}>
            <Background elRef={ref} />

            <Head>
                <title>PerfectCircle</title>
            </Head>
            <Navigation />
            <Container>
                <TitleBar
                    title="Nos Practiciens"
                    background={true}
                    color="vert"
                />
                <Grid
                    container
                    justify="space-around"
                    style={{ margin: "1rem 0 4rem" }}
                >
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Valeurs.png"
                                height="85%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h3">
                            Partage nos valeurs
                        </Typography>
                        <Divider color="vert" width="90px" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Engagement.png"
                                height="70%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h3">Engagés</Typography>
                        <Divider color="beige" width="90px" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Teste.png"
                                height="60%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h3">Testés et validés</Typography>
                        <Divider color="vert" width="90px" />
                    </Grid>
                </Grid>
                <div
                    style={{
                        position: "relative",
                        paddingBottom: "2rem",
                        height: "100%",
                        width: "70%",
                        margin: "auto"
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            padding: "2rem 9rem 2rem 4rem ",
                            position: "relative",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "#E3CCB4",
                            height: "80%",
                            width: "90%",
                            zIndex: 1
                        }}
                    >
                        <div
                            style={{
                                top: 1,
                                left: 1,
                                height: "100%",
                                width: "10%"
                            }}
                        >
                            <img
                                src="picto/guillemets.png"
                                style={{ width: "140%", marginLeft: "-2rem" }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                alignContent: "center"
                            }}
                        >
                            <Typography
                                variant="h4"
                                style={{ marginBottom: "1rem" }}
                            >
                                Nos créateurs de bien-être..
                            </Typography>
                            <Typography align="justify">
                                Coach, thérapeute, conférencier, consultant,
                                sophrologue, coach sportif... Nous capitalisons
                                nos talents pour offrir des prestations liées au
                                bien-être et au développement de tout potentiel,
                                de son vrai "Soi". En entreprise et en
                                individuel, en présentiel ou en distanciel, nos
                                palettes sont infinies pour répondre aux besoins
                                des personnes qui viennent à nous... <br />
                                Nous créons des événements, formations et
                                ateliers en collectif en plus des consultations
                                individuelles que nous pouvons proposer.
                            </Typography>
                        </div>
                    </div>
                    <div
                        style={{
                            borderRadius: 20,
                            position: "absolute",
                            backgroundColor: "#849994",
                            bottom: 0,
                            right: 0,
                            width: "70%",
                            height: "50%",
                            zIndex: 0,
                            padding: "0.5rem 1rem   "
                        }}
                    >
                        <Typography
                            style={{
                                position: "absolute",
                                bottom: 0,
                                marginBottom: "5px",
                                color: "white"
                            }}
                        >
                            Erik Henrion - Fondateur de PerfectCenter
                        </Typography>
                    </div>
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            position: "absolute",
                            bottom: "1rem",
                            right: "1rem",
                            width: "10rem",
                            zIndex: 2
                        }}
                    >
                        <img src="erik.png" style={{ width: "100%" }} />
                    </div>
                </div>
                <TitleBar title="Nos Coachs" color="beige" />
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "flex-start",
                        justifyContent: "space-evenly"
                    }}
                >
                    {dataCoachs.map((coach, i) => {
                        const pair = i % 2 == 0
                        return <Coach pair={pair} user={coach} />
                    })}
                </div>
                <Footer />
            </Container>
        </div>
    )
}
