import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { AnimatedLogo } from "../ components/AnimatedLogo"
import { Background } from "../ components/Background"
import { Animations } from "../ components/Animations"
import {
    Container,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Typography,
    useTheme
} from "@material-ui/core"
import { Divider } from "../ components/Divider"
import CSS from "csstype"
import { Footer } from "../ components/Footer"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { division, DivisionDesc } from "../ components/DivisionDesc"

const useStyles = makeStyles((theme) => {
    return {
        buttonStyles: { position: "relative", zIndex: 3 }
    }
})

export default function index() {
    const ref = React.useRef<HTMLDivElement>(null)

    const classes = useStyles()

    const [clicked, setClicked] = React.useState<division | null>("circle")

    const itemStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    }

    const imageHandleStyle: CSS.Properties = {
        flexGrow: 1,
        display: "flex",
        width: "6rem",
        height: "6rem"
    }

    return (
        <div ref={ref}>
            <Head>
                <title>Home</title>
            </Head>

            <Navigation displayLogo={false} />

            <Animations />

            <AnimatedLogo delay={600} />
            <div style={{ height: "100vh" }} />

            <Container>
                <Typography variant="h1" align="center">
                    Nos Valeurs
                </Typography>
                <Divider color="vert" />

                <Grid container style={{ margin: "2rem 0rem 4rem 0rem" }}>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_sur_main.png"
                                width="80%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4">Bienveillance</Typography>
                        <Divider color="beige" width="75px" height="5px" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Bras_mains.png"
                                width="80%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4">Entraide</Typography>
                        <Divider color="vert" width="75px" height="5px" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_deuxmains.png"
                                width="80%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4">Générosité</Typography>
                        <Divider color="beige" width="75px" height="5px" />
                    </Grid>
                    <Grid item sm={3} style={itemStyle}>
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Coeur_main.png"
                                width="80%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4">Partage</Typography>
                        <Divider color="vert" width="75px" height="5px" />
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
                            <Typography variant="h4">
                                Bienvenu à PerfectCenter
                            </Typography>
                            <Divider color="vert" margin="0 0 1rem" />
                            <Typography align="justify">
                                Avant d'être un centre de bien-être, j'ai
                                souhaité que cet endroit soit un lieu d'échanges
                                et de partages. <br />
                                Le cabaret historique "le Boeuf sur le toit"
                                était le point de rendez-vous de tout Paris mais
                                il était aussi un incubateur de talents. Il
                                permettait notamment à des artistes sans le sou
                                de pouvoir s'exprimer et se lancer.
                                <br />
                                J'ai donc décidé de prolonger l'histoire en
                                créant un centre avec des prestations haut de
                                gamme et composé de personnes partageant les
                                mêmes valeurs de générosité et de bienveillance.
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
                                marginBottom: "5px"
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
                <Typography
                    variant="h1"
                    align="center"
                    style={{ marginTop: "4rem" }}
                >
                    Nos Services
                </Typography>
                <Divider color="vert" />
                <Grid container style={{ margin: "2rem 0 1rem" }}>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h3">PerfectCircle</Typography>
                        <Divider color="vert" width="80px" height="4px" />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/therapeute.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4" style={{ margin: "1rem" }}>
                            Nos Praticiens
                        </Typography>
                        <IconButton className={classes.buttonStyles} onClick={() => setClicked("circle")}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h3">PerfectCare</Typography>
                        <Divider
                            color="beige"
                            width="80px"
                            height="4px"
                            margin="0 0 1rem"
                        />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/produits.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4" style={{ margin: "1rem" }}>
                            Nos produits
                        </Typography>
                        <IconButton className={classes.buttonStyles} onClick={() => setClicked("care")}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                    <Grid item sm={4} style={itemStyle}>
                        <Typography variant="h3">PerfectCorporate</Typography>
                        <Divider color="vert" width="80px" height="4px" />
                        <div style={imageHandleStyle}>
                            <img
                                src="picto/Malette.png"
                                width="100%"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant="h4" style={{ margin: "1rem" }}>
                            Entreprise
                        </Typography>
                        <IconButton className={classes.buttonStyles} onClick={() => setClicked("corporate")}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                {clicked && <DivisionDesc division={clicked} />}
                <Footer />
            </Container>
        </div>
    )
}
