import {
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { Divider } from "../Divider"
import { colors } from "../../modules/theme"
import { MyCarrousel } from "../MyCarrousel"

const useStyles = makeStyles((theme) => {
    return {
        root:{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
        }
    }
})

export function DecouvertePraticiens() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <>
                <div
                    style={{
                        position:"relative",
                        width: "100%",
                        height: "15rem",
                        float:"left",
                        backgroundColor: colors.vert
                    }}>
                        <div style={{
                            position:"relative",
                            right:0,
                            marginTop: "2.9vw",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center"
                        }}>
                            <Typography variant="h2" color="textSecondary" align="center" > 
                                Découvrer nos praticiens
                            </Typography>
                            <Divider color={"beige"} width="9rem"/>
                        </div>
                        <div style={{
                            position:"absolute",
                            width: "60vw",
                            minWidth: "15rem",
                            right:"10vw",
                            top:"6rem",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"flex-end"
                        }}>
                            <Typography variant="h4" color="textSecondary" align="right"> 
                                "Nul ne sait ce que nous savons ensemble"
                            </Typography>
                            <Typography variant="body1" color="textSecondary" style={{marginRight:"2rem", fontStyle:"italic"}}> 
                                Euripide
                            </Typography>
                        </div>
                        
                        <div 
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left:0,
                                height: "100%",
                                width: "30%",
                                minWidth: "8rem",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: "url(/photos/cactus.png)",
                                backgroundPosition: "bottom left",
                                backgroundSize: "100%"
                            }}>
                        </div>
                </div>
                <div
                    style={{
                        position:"relative",
                        width: "100%",
                        float:"left",
                        display:"flex",
                        justifyContent:"center",
                        backgroundColor: colors.vert
                    }}>
                        {/* <MyCarrousel /> */}
                </div>
            </>
        )
    }
    return (
        <>
            <div className={classes.root}>
                <div
                    style={{
                        position:"relative",
                        width: "50%",
                        height: "100%",
                        float:"left",
                        display:"flex",
                        justifyContent:"center",
                    }}>
                        
                </div>
            </div>
        </>
    )
}