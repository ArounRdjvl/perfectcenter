import { Typography, useTheme } from "@material-ui/core"
import { Divider } from "./Divider"
import React from "react"

export interface TitleProps {
    title?: string
    background?: boolean
    color: "beige" | "noir" | "vert"
}

export function TitleBar(props: TitleProps) {
    const theme = useTheme()
    if (props.background) {
        return (
            <div
                style={{
                    position: "relative",
                    marginTop:"2rem",
                    height: "10rem",
                    margin:"auto"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        position: "relative",
                        borderRadius: 20,
                        margin: "0 auto",
                        top: "10%",
                        backgroundColor: "#E3CCB4",
                        height: "55%",
                        width: "35%",
                        zIndex: 1,
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="h1" align="center" style={{margin:"auto"}}>
                        {props.title}
                        <Divider color={props.color} />
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        borderRadius: 20,
                        position: "absolute",
                        backgroundColor: "#849994",
                        top: 0,
                        left: "30%",
                        width: "35%",
                        height: "55%",
                        zIndex: 0
                    }}
                ></div>
            </div>
        )
    }
    return (
        <>
            <Typography variant="h1" align="center" style={{ margin: "2rem auto" }}>
                {props.title}
                <Divider color={props.color} />
            </Typography>
        </>
    )
}
