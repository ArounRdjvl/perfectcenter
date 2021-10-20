import {
    Typography,
    Grid,
    IconButton,
    useTheme,
    useMediaQuery
} from "@material-ui/core"
import React from "react"
import { Divider } from "../Divider"
import { useStyles } from "../../pages/index"
import { division, DivisionDesc } from "./DivisionDesc"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export function Services() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [clicked, setClicked] = React.useState<division | null>("circle")
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <>
            <Typography
                variant="h1"
                align="center"
            >
                Nos 3 pôles
            </Typography>
            <Divider color="vert" />
            <Grid container style={{ margin: "2rem 0 1rem" }}>
                <Grid item xs={12} md={4} className={classes.itemStyle}>
                    <Typography variant="h3">PerfectCircle</Typography>
                    <Divider color="vert" width="80px" height="4px" />
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/therapeute.png"
                            width="100%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4" style={{ marginTop: "1rem" }}>
                        Nos Praticiens
                    </Typography>
                    <IconButton
                        className={classes.buttonStyles}
                        onClick={() => setClicked("circle")}
                        style={{position:"relative", top:"1rem", marginTop: "1.5rem"}}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    {isMobile && clicked == "circle" && (
                        <DivisionDesc division={clicked} />
                    )}
                </Grid>
                <Grid item xs={12} md={4} className={classes.itemStyle}>
                    <Typography variant="h3">PerfectCare</Typography>
                    <Divider
                        color="beige"
                        width="80px"
                        height="4px"
                        margin="0 0 1rem"
                    />
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/produits.png"
                            width="100%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4" style={{ margin: "1rem" }}>
                        Nos produits
                    </Typography>
                    <IconButton
                        className={classes.buttonStyles}
                        onClick={() => setClicked("care")}
                        style={{position:"relative", top:"1rem", marginTop: "1.5rem"}}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    {isMobile && clicked == "care" && (
                        <DivisionDesc division={clicked} />
                    )}
                </Grid>
                <Grid item xs={12} md={4} className={classes.itemStyle}>
                    <Typography variant="h3">PerfectCorporate</Typography>
                    <Divider color="vert" width="80px" height="4px" />
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/Malette.png"
                            width="100%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4" style={{ margin: "1rem" }}>
                        Entreprise
                    </Typography>
                    <IconButton
                        className={classes.buttonStyles}
                        onClick={() => setClicked("corporate")}
                        style={{position:"relative", top:"1rem", marginTop: "1.5rem"}}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    {isMobile && clicked == "corporate" && (
                        <DivisionDesc division={clicked} />
                    )}
                </Grid>
            </Grid>
            {!isMobile && clicked && <DivisionDesc division={clicked} />}
        </>
    )
}
