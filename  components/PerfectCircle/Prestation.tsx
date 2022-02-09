import {
    Button,
    Container,
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
import { TitleBar } from " components/TitleBar"

export interface PrestationProps {
    titre: string
    prix?: string
    description?: string
}

export function Prestation(props: PrestationProps){
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    var prix = props.prix ? `${props.prix}` : "Faire un devis"
    if (isMobile) {
        return (
        <>
            <div style ={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0.5rem 0"
            }}>
                <div style={{
                    width: "80%"
                }}>
                    <Typography variant="h4"color="textSecondary">{props.titre}</Typography>
                </div>
                <div style={{
                    width: "20%"
                }}>
                    <Typography variant="h4" align="center" color="textSecondary">{prix}</Typography>
                </div>
            </div>
        </>
        )
    }
    return (
        <>
            <div style ={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0.5rem 0"
            }}>
                <div style={{
                    width: "80%"
                }}>
                    <Typography variant="h4"color="textSecondary">{props.titre}</Typography>
                </div>
                <div style={{
                    width: "20%"
                }}>
                    <Typography variant="h4" align="center" color="textSecondary">{prix}</Typography>
                </div>
            </div>
        </>
    )
}
