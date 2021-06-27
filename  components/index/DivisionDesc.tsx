import { makeStyles, useMediaQuery, useTheme, Typography} from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { colors } from "../../modules/theme"

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
            top: "-2rem",
            height: "100%",
            width: "30%",
            backgroundColor: colors.vert,
            borderRadius: 20
        },
        beigeDiv: {
            position: "relative",
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
            height: "100%",
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
                <Typography>
                    PerfectCircle regroupe un large nombre de praticiens,
                    thérapeuthes et beacoup d'autres interventants. Une grande
                    divesité d'activité permet à notre clientèle de s'orienter
                    vers la solution adaptée à ces besoins
                </Typography>
                <Typography>
                    Une communauté de coachs, thémapeutes et divers
                    intervenants. Avec la possibilité de louer les espaces et
                    matériels et protifer de prix attractifs sur les produits
                    PerfectCenter
                </Typography>
            </>
        )
    } else if (props.division == "care") {
        content = (
            <>
                <Typography>
                    PerfectCare regroupe un large choix de produit sélectionner par nos soins. 
                    Ces produits sont utilisés régulièrement par notre coach et thérapeutes comme les fleurs de bach ou encore le Psio.
                </Typography>
                <Typography>
                    Nous vous invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par télephone.
                </Typography>
            </>
        )
    } else if (props.division == "corporate") {
        content = (
            <>
                <Typography>
                    Des offres spécialement adaptées aux entreprises avec des solutions répondant aux problématiques de Qualité de Vie au Travail, de télétravail, de gestion du stress..
                </Typography>
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
