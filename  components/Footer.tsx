import { Typography, Grid, useTheme } from "@material-ui/core"
import { Divider } from "../ components/Divider"
import React from "react"

export function Footer() {
    const theme = useTheme()
    return (
        <div
            style={{
                marginTop: "3rem",
                position: "relative",
                height: "10rem",
                width: "100%"
            }}
        >
            <div
                style={{
                    backgroundColor: "#3B424A",
                    position: "absolute",
                    borderRadius: "30px",
                    height: "50%",
                    width: "45%",
                    top: 0,
                    left: 0
                }}
            ></div>
            <div
                style={{
                    backgroundColor: "#E3CCB4",
                    position: "absolute",
                    borderRadius: "30px",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    height: "65%",
                    width: "84%",
                    left: "8%",
                    top: "17%"
                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={4}
                        style={{
                            position: "relative"
                        }}
                    >
                        <Typography style={{ marginLeft: "5rem" }}>
                            34 rue du colisée - 75008 Paris
                            <br /> 01 42 89 52 37
                            <br /> Contact@perfectcenter.fr
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        style={{
                            position: "relative"
                        }}
                    >
                        <Typography variant="h1" align="center">
                            PerfectCenter
                        </Typography>
                        <Divider color="vert" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        style={{
                            position: "relative"
                        }}
                    >
                        <div
                            style={{
                                margin: "auto",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src="picto/facebook_fonce.png"
                                width={50}
                                style={{ margin: theme.spacing(1) }}
                            />
                            <img
                                src="picto/Instagram_fonce.png"
                                width={50}
                                style={{ margin: theme.spacing(1) }}
                            />
                            <img
                                src="picto/Linkedin_fonce.png"
                                width={50}
                                style={{ margin: theme.spacing(1) }}
                            />
                            <img
                                src="picto/YT_Fonce.png"
                                width={50}
                                style={{ margin: theme.spacing(1) }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div
                style={{
                    backgroundColor: "#849994",
                    borderRadius: "30px",
                    position: "absolute",
                    height: "50%",
                    width: "45%",
                    bottom: 0,
                    right: 0
                }}
            >
                <Typography
                    align="center"
                    style={{
                        marginLeft: "2rem",
                        marginBottom: "2px",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }}
                >
                    Copyright © 2021 perfectcenter.fr® All rights reserved
                </Typography>
            </div>
        </div>
    )
}
