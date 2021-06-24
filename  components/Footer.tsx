import {
    Typography,
    Grid,
    useTheme,
    Divider as MuiDivider,
    useMediaQuery,
    makeStyles
} from "@material-ui/core"
import { Divider } from "../ components/Divider"
import React from "react"
import { colors } from "../modules/theme"

const useStyles = makeStyles((theme) => {
    return {
        firstOnMd: {
            [theme.breakpoints.down("sm")]: {
                order: -1
            }
        }
    }
})

export function Footer() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div
            style={{
                marginTop: "3rem",
                position: "relative",
                width: "100%"
            }}
        >
            <div
                style={{
                    backgroundColor: colors.noir,
                    position: "absolute",
                    borderRadius: 20,
                    height: "40%",
                    width: isMobile ? "80%" : "45%",
                    top: 0,
                    left: 0
                }}
            />
            <div
                style={{
                    backgroundColor: colors.vert,
                    borderRadius: 20,
                    position: "absolute",
                    height: "40%",
                    width: isMobile ? "80%" : "45%",
                    bottom: 0,
                    right: 0,
                    overflow: "hidden"
                }}
            >
                <Typography
                    noWrap
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

            <div
                style={{
                    padding: "2rem 0"
                }}
            >
                <Grid
                    container
                    style={{
                        backgroundColor: "#E3CCB4",
                        position: "relative",
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        width: "84%",
                        left: "8%",
                        padding: "1rem 0"
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{
                            position: "relative"
                        }}
                    >
                        <Typography
                            style={{ marginLeft: isMobile ? 0 : "5rem" }}
                            align={isMobile ? "center" : "left"}
                        >
                            34 rue du colisée - 75008 Paris
                            <br /> 01 42 89 52 37
                            <br /> Contact@perfectcenter.fr
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{
                            position: "relative",
                            margin: "auto",
                            padding: "1rem 0"
                        }}
                        className={classes.firstOnMd}
                    >
                        <Typography variant="h1" align="center">
                            PerfectCenter
                        </Typography>
                        <Divider color="vert" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
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
                            <a
                                href="https://www.facebook.com/PerfectCenterParis"
                                target="_blank"
                            >
                                <img
                                    src="picto/Facebook_fonce.png"
                                    width={50}
                                    style={{ margin: theme.spacing(1) }}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/perfectcenter_/?hl=fr"
                                target="_blank"
                            >
                                <img
                                    src="picto/Instagram_fonce.png"
                                    width={50}
                                    style={{ margin: theme.spacing(1) }}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/perfectcenter/"
                                target="_blank"
                            >
                                <img
                                    src="picto/Linkedin_fonce.png"
                                    width={50}
                                    style={{ margin: theme.spacing(1) }}
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCvcusrvzAdqfjT5ICXXNe-g"
                                target="_blank"
                            >
                                <img
                                    src="picto/YT_Fonce.png"
                                    width={50}
                                    style={{ margin: theme.spacing(1) }}
                                />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
