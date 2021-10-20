import { makeStyles, useMediaQuery, useTheme, Typography, Link, Button} from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { colors } from "../../modules/theme"
import { Divider } from "../Divider"

export type division = "circle" | "care" | "corporate"

export interface DivisionDescProps {
    division: division
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minHeight: "10rem",
            [theme.breakpoints.up("md")] : {
                margin: "0 5rem",
            },
            position: "relative"
        },
        greenDiv: {
            position: "absolute",
            top: "-3.2rem",
            height: "70%",
            width: "30%",
            backgroundColor: colors.vert,
            borderRadius: 20
        },
        beigeDiv: {
            position: "relative",
            marginTop:"-0.8rem",
            borderRadius: 20,
            backgroundColor: colors.beige,
            padding: "1rem 2rem",
            [theme.breakpoints.up("md")] : {
                padding: "2rem 3rem",
                minHeight: "10rem"
            }
        },
        leftGreenDiv: {
            left: "-2rem"
        },
        middleGreenDiv: {
            left: "35%"
        },
        rightGreenDiv: {
            right: "-2rem"
        },
        blackDiv: {
            position: "absolute",
            borderRadius: 20,
            backgroundColor: colors.noir,
            padding: "2rem 3rem",
            height: "55%",
            right: "-2rem",
            bottom: "-2rem",
            width: "50%"
        },
        leftBlackDiv: {
            left: "-2rem",
            width: "50%"
        },
        middleBlackDiv: {
            left: "-2rem",
            right: "-2rem",
            width: "auto"
        },
        rightBlackDiv: {
            right: "-2rem",
            width: "50%"
        }
    }
})

export function DivisionDesc(props: DivisionDescProps) {
    const theme = useTheme()
    const classes = useStyles(theme)

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    let content
    if (props.division == "circle") {
        content = (
            <>
                <div style={{
                   
                    display: "flex", 
                    flexDirection:"row",
                    }}
                    >
                        <div style={{
                            width:"50%",
                            display: "flex", 
                            flexDirection:"column", 
                            alignItems:"center",
                            padding: "0rem 2rem 0rem 2rem"
                            }}
                            >
                                <Typography style={{fontSize:"20px",margin:"0rem 0rem 1rem 0rem"}}>
                                        <b>Trouver un praticien</b>
                                </Typography>
                                <Typography align="justify">
                                    PerfectCircle regroupe de nombreux praticiens,
                                    thérapeuthes et interventants divers. C'est ce qui permet à notre clientèle d'être accompagnée
                                    vers la solution qui est la plus adaptée à ses besoins spécifiques.
                                </Typography>
                                <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                                    <Link href="/perfectcircle" underline="none" style={{ marginTop: "2rem"}}>
                                        <Button variant="contained" color="secondary" size="large" >
                                            PerfectCircle
                                        </Button>
                                    </Link>
                                </div>
                        </div>
                        <div style={{
                            width:"50%",
                            display: "flex", 
                            flexDirection:"column", 
                            alignItems:"center",
                            padding: "0rem 1rem 0rem 1rem"
                            }}
                            >
                                <Typography style={{fontSize:"20px", margin:"0rem 0rem 1rem 0rem"}}>
                                        <b>Rejoindre PerfectCircle</b>
                                </Typography >
                                <Typography align="justify">    
                                    Vous êtes praticien ou thérapeute, et partagez les mêmes valeurs que nous ? Alors rejoingnez l'équipe PerfectCircle !
                                </Typography>
                                
                                <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                                    <Link href="/contact" underline="none" style={{ marginTop: "2rem", }}>
                                        <Button variant="contained" color="secondary" size="large" >
                                            Nous rejoindre
                                        </Button>
                                    </Link>
                                </div>
                        </div>
                </div>
            </>
        )
    } else if (props.division == "care") {
        content = (
            <>
                <div style={{
                    width:"100%",
                    display: "flex", 
                    flexDirection:"column", 
                    alignItems:"center",
                    padding: "0rem 1rem 0rem 1rem"
                    }}>
                        <Typography style={{fontSize:"20px", margin:"0rem 0rem 1rem 0rem"}}>
                            <b>Des produits séléctionnés avec soins !</b>
                        </Typography>
                        <Typography align="justify">
                            Toute une gamme de produit allant des lunettes de luminothérapie, en passant par les fleurs de bach et des compléments alimentaires.
                        </Typography>

                        <div style={{
                            width:"100%",
                            display: "flex", 
                            flexDirection:"row", 
                            justifyContent:"space-around",
                            padding: "0rem 1rem 0rem 1rem",
                            margin: "1rem"
                            }}>
                                <img src="produits/Psio2.png" width={130} style={{borderRadius: "20px"}}/>
                                <img src="produits/bach.png" width={150} style={{borderRadius: "20px"}}/>
                                <img src="produits/ZStress.png" width={140} style={{borderRadius: "20px"}}/>
                        </div>

                        <Typography align="justify">
                            Ces produits sont utilisés régulièrement par nos thérapeutes.
                            Nous vous invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par télephone.
                        </Typography>
                        <div style={{
                            width:"100%",
                            display: "flex", 
                            flexDirection:"row", 
                            justifyContent:"space-around",
                            padding: "0rem 1rem 0rem 1rem",
                            }}>
                                <Link href="/perfectcare" underline="none" style={{ marginTop: "1rem", }}>
                                        <Button variant="contained" color="secondary" size="large" >
                                           PerfectCare
                                        </Button>
                                </Link>
                                <Link href="/contact" underline="none" style={{ marginTop: "1rem", }}>
                                        <Button variant="contained" color="secondary" size="large" >
                                            Nous Contacter
                                        </Button>
                                </Link>
                        </div>
                </div>
            </>
        )
    } else if (props.division == "corporate") {
        content = (
            <>
                <div style={{
                    display: "flex", 
                    flexDirection:"column", 
                    alignItems:"center",
                    padding: "0rem 2rem 0rem 2rem"
                    }}
                >
                        <div style={{
                            width: "70%",
                            display: "flex", 
                            flexDirection:"column", 
                            alignItems:"center",
                            }}
                        >
                            <Typography style={{fontSize:"20px", margin:"0rem 0rem 1rem 0rem"}}>
                                <b>Séminaires et formations !</b>
                            </Typography>
                            <Typography>
                                Nous travaillons actuellement à des offres de séminaires et des formations à destination du personnel des entreprises.
                                PerfectCenter est en cours d'agrément QUALIOPI et CPF.
                            </Typography>
                        </div>
                </div>
            </>
        )
    }

    return (
        <div className={classes.root}>
            {!isMobile && (
                <>
                    <div
                        className={clsx(classes.greenDiv, {
                            [classes.leftGreenDiv]: props.division == "circle",
                            [classes.middleGreenDiv]: props.division == "care",
                            [classes.rightGreenDiv]:
                                props.division == "corporate"
                        })}
                    />
                    <div
                        className={clsx(classes.blackDiv, {
                            [classes.rightBlackDiv]: props.division == "circle",
                            [classes.middleBlackDiv]: props.division == "care",
                            [classes.leftBlackDiv]:
                                props.division == "corporate"
                        })}
                    />
                </>
            )}
            <div className={classes.beigeDiv}>{content}</div>
        </div>
    )
}
