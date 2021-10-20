import { Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { Divider } from "./Divider"
import React from "react"
import { colors } from "../modules/theme"

export interface TitleProps {
    title?: string
    background?: boolean
    color: "beige" | "noir" | "vert"
}

export function TitleBar(props: TitleProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    if (props.background) {
        return (
            <div
                style={{
                    paddingTop: "1rem",
                    paddingLeft: isMobile? "1rem" : "3rem",
                    width: "100%",
                    display:"flex", justifyContent:"flex-start"
                }}
            >
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <Typography variant="h1" align="center">
                        {props.title}
                    </Typography>
                    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <Divider color={props.color} />
                    </div>
                    
                </div>
                    
                
            </div>
        )
    }
    return (
        <>
            <Typography
                variant="h1"
                align="center"
                style={{ margin: "2rem auto" }}
            >
                {props.title}
                <Divider color={props.color} />
            </Typography>
        </>
    )
}
