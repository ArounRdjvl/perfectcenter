import {
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { Divider } from "../Divider"

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "relative",
            paddingBottom: "2rem",
            height: "100%",
            width: "70%",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
                paddingBottom : "9rem"
            },
            margin: "auto"
        },
        image : {
            borderRadius: 20,
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            width: "10rem",
            zIndex: 2
        },
        imageMobile : {
            bottom: 0,
            left: "1rem",
        },
        greenDiv : {
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
        greenDivMobile : {
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

export function WelcomeMsg() {
    const theme = useTheme()
    const classes = useStyles(theme)

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div className={classes.root}>
            <div
                style={{
                    borderRadius: 20,
                    padding: isMobile ? "3rem 2rem 2rem 2rem" : "3rem 9rem 2rem 4rem ",
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
                        Bienvenu à PerfectCenter
                    </Typography>
                    <Divider color="vert" margin="0 0 1rem" />
                    <Typography align="justify">
                        Avant d'être un centre de bien-être, j'ai souhaité que
                        cet endroit soit un lieu d'échanges et de partages.{" "}
                        <br />
                        Le cabaret historique "le Boeuf sur le toit" était le
                        point de rendez-vous de tout Paris mais il était aussi
                        un incubateur de talents. Il permettait notamment à des
                        artistes sans le sou de pouvoir s'exprimer et se lancer.
                        <br />
                        J'ai donc décidé de prolonger l'histoire en créant un
                        centre avec des prestations haut de gamme et composé de
                        personnes partageant les mêmes valeurs de générosité et
                        de bienveillance.
                    </Typography>
                </div>
            </div>
            <div
                className={clsx(classes.greenDiv, isMobile && classes.greenDivMobile)}
            >
                <Typography>
                    Erik Henrion - Fondateur de PerfectCenter
                </Typography>
            </div>
            <img
                src="erik.png"
                className={clsx(classes.image, isMobile && classes.imageMobile)}
            />
        </div>
    )
}
