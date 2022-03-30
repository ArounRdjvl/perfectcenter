import React from "react"
import { Grid, useTheme, Typography, makeStyles, useMediaQuery, Link, Button } from "@material-ui/core"
import { colors } from "../../modules/theme"
import { Divider } from "../../ components/Divider"
import { MyCarrousel } from " components/MyCarrousel"

const useStyles = makeStyles((theme) => {
    return {
        img: {
            position: "relative",
            left: 0,
            height: "8vw",
            width: "8vw",
            maxHeight:"6rem",
            maxWidth:"6rem"
        }
    }
})

export function PerfectCareIndex() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <>
            <Grid
                justify="center"
                direction="column"
                container
                style={{
                    marginTop: "2rem"
                }}
            >
                <Grid
                    xs={12}
                    style={{
                        position: "relative",
                        zIndex: 3,
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}
                    item
                >
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: colors.vert,
                            height: "12rem",
                            width: "12rem",
                            left: 0,
                            borderRadius: "40px",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}>
                            <img
                                src="picto/produits.png"
                                width="55%"
                                style={{marginTop: "1rem"}}
                            />
                            <Typography variant="h3" color="textSecondary" style={{margin: "1rem 0 0 0"}}>Nos produits</Typography>
                    </div>
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        position: "relative",
                        minWidth: "16rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"center",
                        alignItems:"center",
                        margin: "0.5rem 0"
                    }}
                    item
                >
                    <div
                        style={{
                            backgroundColor: colors.beige,
                            position: "relative",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            width: "90%",
                            borderRadius:"25px",
                            top: 0,
                            padding: "0.5rem 1rem",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}
                    >
                        <Typography variant="h3" align="center">
                            PerfectCare 
                        </Typography>
                    </div>
                    <div
                        style={{
                            padding: "1rem 10vw",
                            position: "relative",
                            zIndex: 2
                        }}
                    >
                        <Typography variant="body1" align="justify">
                            Depuis plus de 14 ans, Erik HENRION n'a cessé de chercher des produits et des services qui se démarquent par leur <strong>innovation</strong> et leur <strong>efficacité</strong>.<br></br>
                            Dans PerfectCare, nous vous proposons toute une gamme de produit allant des lunettes de luminothérapie, en passant par les fleurs de bach et des compléments alimentaires.
                            Ces produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par télephone.
                        </Typography>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                        <Link href="/perfectcare" underline="none" style={{ marginBottom: "2rem"}}>
                            <Button variant="contained" color="secondary" size="large" >
                                PerfectCare
                            </Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </>
        )
    }
    return(
        <Grid
            justify="flex-end"
            container
            style={{marginTop:"2rem"}}
            >
            <Grid
                xs={3}
                style={{
                    position: "relative",
                    zIndex: 3
                }}
                item
            >
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.vert,
                        height: "15vw",
                        width: "15vw",
                        maxHeight: "15rem",
                        minHeight: "12rem",
                        maxWidth: "15rem",
                        minWidth: "12rem",
                        right: 0,
                        borderRadius: "40px",
                        boxShadow : "0px 0px 25px #BBBBBB"
                    }}>
                        <img
                            src="picto/produits.png"
                            width="60%"
                            style={{marginTop: "1rem"}}
                        />
                        <Typography variant="h3" color="textSecondary" style={{margin: "1rem 0 0 0"}}>Nos produits</Typography>
                </div>
            </Grid>
            <Grid
                xs={9}
                style={{
                    position: "relative",
                    paddingTop: "3rem",
                    minHeight:"15rem"
                }}
                item
            >
                <div
                        style={{
                            backgroundColor: colors.beige,
                            position: "relative",
                            display:"flex",
                            alignItems:"center",
                            width: "100%",
                            right: 0,
                            top: 0,
                            padding: "0.7rem",
                            borderRadius: "0 30px 30px 0",
                            boxShadow : "0px 0px 25px #BBBBBB"
                        }}
                    >
                        <Typography variant="h2" align="left" style={{marginLeft: "5vw"}}>
                            PerfectCare
                        </Typography>
                    </div>
                    <div
                        style={{
                            padding: "1rem 5rem",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Typography variant="body1" align="justify" style={{margin:"2rem 0"}}>
                            Depuis plus de 14 ans, Erik HENRION n'a cessé de chercher des produits et des services qui se démarquent par leur <strong>innovation</strong> et leur <strong>efficacité</strong>.<br></br>
                            Dans PerfectCare, nous vous proposons toute une gamme de produit allant des lunettes de luminothérapie, en passant par les fleurs de bach et des compléments alimentaires.
                            Ces produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par télephone.
                        </Typography>
                        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                            <Link href="/perfectcare" underline="none" style={{ marginBottom: "2rem"}}>
                                <Button variant="contained" color="secondary" size="large" >
                                    PerfectCare
                                </Button>
                            </Link>
                        </div>
                    </div>
            </Grid>
        </Grid>
    )
}