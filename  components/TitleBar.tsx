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
                    marginBottom: "2rem",
                    height: "10rem"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        position: "relative",
                        borderRadius: 20,
                        padding: "2rem 5rem",
                        margin: "0 auto",
                        top: "10%",
                        backgroundColor: "#E3CCB4",
                        height: "80%",
                        width: "45%",
                        zIndex: 1,
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h1">
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
                        left: "25%",
                        width: "45%",
                        height: "80%",
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
