import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import "../styles/Home.module.less"
import { AnimatedLogo } from "../ components/AnimatedLogo"
import { Container, Grid, Paper, Typography, useTheme } from "@material-ui/core"
import { Divider } from "../ components/Divider"
import CSS from "csstype"
import { Footer } from "../ components/Footer"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function index() {
    const theme = useTheme()

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
                <title>Home</title>
            </Head>

            <Navigation displayLogo={false} />

            <AnimatedLogo />
            <div style={{ height: "100%" }} />

            <Container>
                <Typography variant="h1" align="center">
                    Nos Valeurs
                </Typography>
                <Divider color="vert" />

                <Grid container style={{margin: "4rem 0"}}>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_sur_main.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Bienveillance</Typography>
                        <Divider color="beige" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Bras_mains.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Entraide</Typography>
                        <Divider color="vert" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_deuxmains.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h2">Générosité</Typography>
                        <Divider color="beige" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_main.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h1">Partage</Typography>
                        <Divider color="vert" />
                    </Grid>
                </Grid>
                <div style={{ position: "relative", paddingBottom: "2rem" }}>
                    <div
                        style={{
                            borderRadius: 30,
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
                            borderRadius: 30,
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
                        <Typography style={{ position: "absolute", bottom: 0 }}>
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
                <Typography variant="h1" align="center" style={{marginTop: "4rem"}}>
                    Nos Services
                </Typography>
                <Divider color="vert" />
                <Grid container style={{margin: "4rem 0"}}>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h2">Entreprise</Typography>
                        <Divider color="beige" />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Malette.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <ExpandMoreIcon />
                    </Grid>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h2">Nos produits</Typography>
                        <Divider color="vert" />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/produits.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <ExpandMoreIcon />
                    </Grid>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h2">Nos Praticiens</Typography>
                        <Divider color="beige" />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/therapeute.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <ExpandMoreIcon />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>
    )
}
