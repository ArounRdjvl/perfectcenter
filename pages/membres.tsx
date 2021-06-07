import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import "../styles/Home.module.less"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography, useTheme } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
    }
}))

export default function membres() {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Notre Equipe</title>
            </Head>
            <Container>
                <Navigation />

                <Grid style={{ minHeight: "10rem" }} justify="center" container>
                    <Grid
                        xs={3}
                        style={{
                            position: "relative",
                            zIndex: 10
                        }}
                        item
                    >

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            style={{
                                position: "absolute",
                                zIndex: 0
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#E3CCB4",
                                    position: "absolute",
                                    height: "100%",
                                    width: "70%",
                                    borderRadius: "30px"
                                }}
                            ></div>
                            <img
                                src="picto/facebook_fonce.png"
                                width={40}
                                style={{
                                    margin: theme.spacing(1),
                                    zIndex: 11
                                }}
                            />
                            <img
                                src="picto/Instagram_fonce.png"
                                width={40}
                                style={{
                                    margin: theme.spacing(1),
                                    zIndex: 11
                                }}
                            />
                            <img
                                src="picto/Linkedin_fonce.png"
                                width={40}
                                style={{
                                    margin: theme.spacing(1),
                                    zIndex: 11
                                }}
                            />

                        </Grid>
                        <div
                            style={{
                                position: "absolute",
                                marginLeft: "5rem",
                                zIndex: 0,
                            }}
                        >
                            <img
                                style={{
                                    maxHeight: "12rem",
                                    zIndex: 11,
                                    marginTop: "1rem",
                                    borderRadius: "30px"
                                }}
                                alt="complex"
                                src="tom.png"
                            />
                        </div>
                    </Grid>
                    <Grid
                        xs={6}
                        style={{
                            marginTop: "2rem",
                            position: "relative"
                        }}
                        item
                    >
                        <div
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                                zIndex: 0,
                                position: "absolute",
                                height: "160%",
                                width: "130%",
                                left: "-30%",
                                borderRadius: "30px"
                            }}
                        ></div>
                        <div
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                margin: theme.spacing(2)
                            }}
                        >
                            <Typography
                                variant="h1"
                                align="center"
                            >
                                Tom Henrion
                            </Typography>
                            <Typography variant="h2" align="center">
                                Aucun Poste
                            </Typography>
                            <Typography variant="body1" align="center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing exercitationem repudiandae nemo iure
                                aperiam!
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
