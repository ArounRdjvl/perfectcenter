import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import React from "react"
import { Divider } from "../Divider"
import { colors } from "../../modules/theme"
import { heightHeader } from " components/Navigation"
import { WelcomeMsg } from "./WelcomeMsg"
import { WelcomeMsg2 } from "../PerfectCircle/WelcomeMsg2"
import { Title } from "@material-ui/icons"
import { TitleBar } from " components/TitleBar"

const useStyles = makeStyles((theme) => {
    return {
        img: {
            position: "relative",
            width: "8rem",
            height:"8rem",
            borderRadius: "50%",
        },
        img_phone: {
            position: "relative",
            width: "5rem",
            height:"5rem",
            borderRadius: "50%",
        }
    }
})

export function Valeurs() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
        <>
            <TitleBar title="Nos valeurs" background={true} color="vert" padding="0 0 2rem 2rem" paddingMobile="2rem 0 0 5vw" />
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    justifyContent: "space-evenly",
                    margin: "2rem 0 5rem 0",
                }}
            >
                <div
                    style={{
                        zIndex:2,
                        width: "6rem",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin :"2rem"
                    }}
                >
                    <div className={classes.img_phone}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.beige,
                            backgroundImage: "url(/picto/Coeur_sur_main.png)",
                            backgroundSize: "70%"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Bienveillance
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        width: "6rem",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin :"2rem"
                    }}
                >
                    <div className={classes.img_phone}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.vert,
                            backgroundImage: "url(/picto/Bras_mains.png)",
                            backgroundSize: "70%"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Synergie
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        width: "6rem",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin :"2rem"
                    }}
                >
                    <div className={classes.img_phone}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.beige,
                            backgroundImage: "url(/picto/Coeur_main.png)",
                            backgroundSize: "70%"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Partage
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        width: "6rem",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin :"2rem"
                    }}
                >
                    <div className={classes.img_phone}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.vert,
                            backgroundImage: "url(/picto/Coeur_deuxmains.png)",
                            backgroundSize: "70%"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                    Générosité
                    </Typography>
                </div>
            </div>
        </>
        )
    }
    return (
        <>
            <TitleBar title="Nos valeurs" background={true} color="vert" padding="0 0 2rem 2rem" paddingMobile="2rem 0 0 5vw" />
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    justifyContent: "space-evenly",
                    margin: "2rem 0 5rem 0"
                }}
            >
                <div
                    style={{
                        zIndex:2,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className={classes.img}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.beige,
                            backgroundImage: "url(/picto/Coeur_sur_main.png)",
                            backgroundSize: "70%",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Bienveillance
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className={classes.img}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.vert,
                            backgroundImage: "url(/picto/Bras_mains.png)",
                            backgroundSize: "70%",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Synergie
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className={classes.img}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.beige,
                            backgroundImage: "url(/picto/Coeur_main.png)",
                            backgroundSize: "70%",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                        Partage
                    </Typography>
                </div>
                <div
                    style={{
                        zIndex:2,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignContent:"center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className={classes.img}
                        style={{
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: colors.vert,
                            backgroundImage: "url(/picto/Coeur_deuxmains.png)",
                            backgroundSize: "70%",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}>
                    </div>
                    <Typography variant="h4" align="center" style={{marginTop:"1rem", fontWeight: "bold"}}>
                    Générosité
                    </Typography>
                </div>
            </div>
        </>
    )
}
