import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Divider } from "../ components/Divider"
import "../styles/Home.module.less"
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import CSS from "csstype"

export default function circle() {
    
    const itemStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    }

    const imageHandleStyle: CSS.Properties = {
        flexGrow: 1,
        display: "flex",
        width: "10rem",
        height: "10rem"
    }

    return (
        <div>
            <Head>
                <title>PerfectCircle</title>
            </Head>
            <Container>
                <Navigation />

                <TitleBar title="Nos Practiciens" background={true} color="vert"/>
                <Grid container justify="space-around" style={{margin: "4rem 0"}}>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Valeurs.png"
                                height="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Partage nos valeurs</Typography>
                        <Divider color="vert" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Teste.png"
                                height="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Testés et validés</Typography>
                        <Divider color="beige" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Engagement.png"
                                height="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Engagés</Typography>
                        <Divider color="vert" />
                    </Grid>
                </Grid>
                <div style={{ position: "relative", paddingBottom: "2rem" }}>
                    <div
                        style={{
                            borderRadius: 20,
                            padding: "2rem 7rem",
                            position: "relative",
                            backgroundColor: "#E3CCB4",
                            height: "80%",
                            width: "90%",
                            zIndex: 1
                        }}
                    >
                        <Typography>
                            Avant d'être un centre de bien-être, j'ai souhaité
                            que cet endroit soit un lieu d'échanges et de
                            partages. <br />
                            Le cabaret historique "le Boeuf sur le toit" était
                            le point de rendez-vous de tout Paris mais il était
                            aussi un incubateur de talents. Il permettait
                            notamment à des artistes sans le sou de pouvoir
                            s'exprimer et se lancer.
                            <br />
                            J'ai donc décidé de prolonger l'histoire en créant
                            un centre avec des prestations haut de gamme et
                            composé de personnes partageant les mêmes valeurs de
                            générosité et de bienveillance.
                        </Typography>
                    </div>
                    <div
                        style={{
                            borderRadius: 20,
                            position: "absolute",
                            backgroundColor: "#849994",
                            bottom: 0,
                            right: 0,
                            width: "60%",
                            height: "50%",
                            zIndex: 0,
                            padding: "0.5rem 1rem   "
                        }}
                    >
                        <Typography style={{ position: "absolute", bottom: "0.3rem" }}>
                            Tom Henrion - Créateur de bienveillance
                        </Typography>
                    </div>
                    <div
                        style={{
                            borderRadius: 30,
                            overflow: "hidden",
                            position: "absolute",
                            bottom: "1rem",
                            right: "1rem",
                            width: "10rem",
                            zIndex: 2
                        }}
                    >
                        <img src="tom.png" style={{ width: "100%" }} />
                    </div>
                </div>
                <TitleBar title="Coaching" color="beige" />
                <Footer />
            </Container>
        </div>
    )
}
