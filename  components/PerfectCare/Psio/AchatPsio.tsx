import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { colors } from "../../../modules/theme"
import { ColorizeRounded } from "@material-ui/icons"
import { Product } from "../../../ components/Product"
import { dataPsio } from "../../../modules/data"

export function AchatPsio() {
    const theme = useTheme()

    return (
        <>
        <div style={{
            width: "100%",
            marginTop: "4rem"
            }}>
            <Typography variant="h2" align="center">Achetez votre Psio</Typography>
        </div>
        <div style={{
            margin: "2rem 0rem",
            padding: "2rem",
            width:"100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }}>
            {dataPsio.map((product) => {
                return <Product product={product} />
            })}
        </div>
        </>
    )
    
}
