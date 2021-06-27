import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { useStyles } from "../../pages"
import { Divider } from "../Divider"

export function Valeurs() {
    const classes = useStyles()

    return (
        <>
            <Typography variant="h1" align="center">
                Nos Valeurs
            </Typography>
            <Divider color="vert" />

            <Grid container style={{ margin: "2rem 0rem 4rem 0rem" }}>
                <Grid item xs={12} sm={3} className={classes.itemStyle}>
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/Coeur_sur_main.png"
                            width="80%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4">Bienveillance</Typography>
                    <Divider color="beige" width="75px" height="5px" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.itemStyle}>
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/Bras_mains.png"
                            width="80%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4">Entraide</Typography>
                    <Divider color="vert" width="75px" height="5px" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.itemStyle}>
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/Coeur_deuxmains.png"
                            width="80%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4">Générosité</Typography>
                    <Divider color="beige" width="75px" height="5px" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.itemStyle}>
                    <div className={classes.imageHandleStyle}>
                        <img
                            src="picto/Coeur_main.png"
                            width="80%"
                            style={{ margin: "auto" }}
                        />
                    </div>
                    <Typography variant="h4">Partage</Typography>
                    <Divider color="vert" width="75px" height="5px" />
                </Grid>
            </Grid>
        </>
    )
}
