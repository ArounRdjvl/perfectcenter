import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { colors } from "../modules/theme"

export interface BulleInfoProps {
    titre: string
    size: string
    photoUrl: string
    photoSize: string
}

export function BulleInfo(props: BulleInfoProps) {
    const theme = useTheme()

    return (
        <>
        <div style={{
            width: props.size,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "2rem",
            minWidth: "10rem"
        }}>
            <div style={{
                position: "relative",
                backgroundColor: colors.vert,
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${props.photoUrl})`,
                backgroundPosition: "50% 40%",
                backgroundSize: props.photoSize,
                width: props.size,
                height: props.size,
                borderRadius: "50%",
                boxShadow : "0px 0px 25px #777777"
            }}>
            </div>
            <Typography variant="h4" align="center" style={{marginTop:"2rem"}}>{props.titre}</Typography>
        </div>
        </>
    )
    
}
