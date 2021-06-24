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
                    marginTop: "2rem",
                    paddingTop: "1rem"
                }}
            >
                <div
                    style={{
                        width: isMobile ? "80%" : "40%",
                        margin: "auto",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            borderRadius: 20,
                            margin: "0 auto",
                            backgroundColor: colors.beige,
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem"
                        }}
                    >
                        <Typography variant="h1" align="center">
                            {props.title}
                        </Typography>
                        <Divider color={props.color} />
                    </div>
                    <div
                        style={{
                            borderRadius: 20,
                            position: "absolute",
                            backgroundColor: colors.vert,
                            top: "-1rem",
                            bottom: "1rem",
                            left: "-1rem",
                            right: "1rem",
                            zIndex: 0
                        }}
                    />
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
