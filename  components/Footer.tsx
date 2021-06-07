import { Typography, Grid, Divider as MuiDivider, Theme, useTheme, makeStyles} from "@material-ui/core"
import { Divider } from "../ components/Divider"
import React from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    }
}))

export function Footer() {
    const theme = useTheme()
    return (
        <div 
            style={{
                marginTop:"3rem",
                position: "relative",
                height: "16%",
                width: "100%"
            }}>
            
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
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    height: "65%",
                    width: "84%",
                    left: "8%",
                    top: "17%"
                    }}
            >
                <Grid
                    xs={4}
                    style={{
                        position: "relative",
                    }}
                    item
                >
                    <Typography style={{marginLeft: "5rem"}}>
                        34 rue du colisée - 75008 Paris
                        <br /> 01 42 89 52 37
                        <br /> Contact@perfectcenter.fr
                    </Typography>
                </Grid>
                <Grid
                    xs={4}
                    style={{
                        position: "relative"
                    }}
                    item
                >
                    <Typography variant="h1" align="center" >
                        PerfectCenter
                        </Typography>
                    <Divider color="vert"/>
                </Grid>
                <Grid
                    xs={4}
                    style={{
                        position: "relative"
                    }}
                    item
                >
                    <div style={{
                        margin: "auto",
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent: "center"
                    }}>
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
                <Typography align="center"
                    style={{
                        marginLeft: "2rem",
                        marginBottom: "2px",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }}>
                    Copyright © 2021 perfectcenter.fr®  All rights reserved 
                </Typography>
            </div>
        </div>
    )
}
