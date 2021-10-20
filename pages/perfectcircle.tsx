import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Divider } from "../ components/Divider"
import { Background } from "../ components/Background"
import {
    Container,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme,
    withStyles
} from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import { Coach } from "../ components/Coach"
import CSS from "csstype"
import { CoachProps } from "../ components/Coach"
import { dataCoachs } from "../modules/data"
import clsx from "clsx"

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "relative",
            paddingBottom: "2rem",
            height: "100%",
            width: "70%",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
                paddingBottom: "9rem"
            },
            margin: "auto"
        },
        image: {
            borderRadius: 20,
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            width: "10rem",
            zIndex: 2
        },
        imageMobile: {
            bottom: 0,
            left: "1rem"
        },
        greenDiv: {
            borderRadius: 20,
            position: "absolute",
            backgroundColor: "#849994",
            bottom: 0,
            right: 0,
            width: "70%",
            height: "10rem",
            zIndex: 0,
            padding: "0.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
        },
        greenDivMobile: {
            left: "10rem",
            bottom: "1rem",
            paddingLeft: "2rem",
            width: "auto",
            right: "2rem",
            height: "auto",
            paddingTop: "2rem"
        }
    }
})

export default function perfectcircle() {
    const theme = useTheme()
    const classes = useStyles(theme)

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
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
                    style={{ margin: "3rem 0 4rem" }}
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
                <div className={classes.root}>
                    <div
                        style={{
                            borderRadius: 20,
                            padding: isMobile ? "2rem 2rem 3rem 2rem" : "2rem 9rem 2rem 4rem ",
                            position: "relative",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "#E3CCB4",
                            height: "80%",
                            width: isMobile ? "100%" : "90%",
                            zIndex: 1
                        }}
                    >
                        <img
                            src="picto/guillemets.png"
                            style={{
                                position: "absolute",
                                left: "2rem",
                                width: "2rem",
                                top: "1rem"
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                alignContent: "center"
                            }}
                        >
                            <Typography variant="h4">
                                Nos créateurs de bien-être..
                            </Typography>
                            <Divider color="vert" margin="0 0 1rem" />
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
                        className={clsx(
                            classes.greenDiv,
                            isMobile && classes.greenDivMobile
                        )}
                    >
                        <Typography>
                            Erik Henrion - Fondateur de PerfectCenter
                        </Typography>
                    </div>
                    <img
                        src="erik.png"
                        className={clsx(
                            classes.image,
                            isMobile && classes.imageMobile
                        )}
                    />
                </div>
                <div style={{display:"flex", justifyContent:"center", margin:"3rem 0 3rem 0"}}>
                    <img src="picto/Separateur.png" width={250} style={{ zIndex: 2 }}/>
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
