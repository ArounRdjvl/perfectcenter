import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { Divider } from "./Divider"

export interface UserProps {
    photo?: string
    name?: string
    description?: string
}

export interface ArticleProps {
    pair?: boolean
    user?: UserProps
}

export function Article(props: ArticleProps) {
    const theme = useTheme()
    const pair = props.pair

    if (pair) {
        return (
            <> 
                <div
                    style={{
                        width: "25rem",
                        height: "100%",
                        margin: "0.2rem 0.2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>

                    <div
                        style={{
                            borderRadius: 20,
                            backgroundColor: "#E3CCB4",
                            width: "100%",
                            height: "5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1
                        }}>
                            <Typography variant="h2" align="center">
                                {props.user?.name}
                            </Typography>
                    </div>
                    <img
                        style={{
                            maxHeight: "13rem",
                            borderRadius: "20px",
                            display: "flex",
                            zIndex: 2
                        }}
                        alt={props.user?.name}
                        src={props.user?.photo}
                    />
                    <div
                        style={{
                            borderRadius: 20,
                            backgroundColor: "#849994",
                            position: "relative",
                            width: "100%",
                            height: "12rem",
                            bottom : "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                            padding: "1rem 15px",
                            color: "white"
                        }}>
                            <Typography align="justify" style={{position: "relative", top:"3px"}}>
                                {props.user?.description}
                            </Typography>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div
                style={{
                    width: "25rem",
                    height: "100%",
                    margin: "0.2rem 0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>

                <div
                    style={{
                        borderRadius: 20,
                        backgroundColor: "#849994",
                        width: "100%",
                        height: "5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                        color: "white"
                    }}>
                        <Typography variant="h2" align="center">
                            {props.user?.name}
                        </Typography>
                </div>
                <img
                    style={{
                        maxHeight: "13rem",
                        borderRadius: "20px",
                        display: "flex",
                        zIndex: 2
                    }}
                    alt={props.user?.name}
                    src={props.user?.photo}
                />
                <div
                    style={{
                        borderRadius: 20,
                        backgroundColor: "#E3CCB4",
                        position: "relative",
                        width: "100%",
                        height: "12rem",
                        bottom : "1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem 15px",
                        zIndex: 1,
                    }}>
                        <Typography align="justify" style={{position: "relative", top:"3px"}}>
                            {props.user?.description}
                        </Typography>
                </div>
            </div>
        </>
    )
}
