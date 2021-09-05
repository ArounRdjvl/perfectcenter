import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { Divider } from "./Divider"

export interface UserProps {
    photo?: string
    name?: string
    practice1?: string
    practice2?: string
}

export interface CoachProps {
    pair?: boolean
    user?: UserProps 
}

export function Coach(props: CoachProps) {
    const theme = useTheme()
    const pair = props.pair

    if (pair) {
        return (
            <> 
                <div
                    style={{
                            width: "19rem",
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
                            <Typography variant="h4" align="center">
                                {props.user?.name}
                            </Typography>
                    </div>
                    <img
                        style={{
                            maxHeight: "17rem",
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
                            height: "6rem",
                            bottom : "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                            padding: "0rem 1rem",
                            color: "white"
                        }}>
                            <Typography align="center" style={{position: "relative", top:"3px"}}>
                                {props.user?.practice1}
                            </Typography>
                            <Typography align="center" style={{position: "relative", top:"5px"}}>
                                {props.user?.practice2}
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
                        width: "19rem",
                        height: "29rem",
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
                        <Typography variant="h4" align="center">
                            {props.user?.name}
                        </Typography>
                </div>
                <img
                    style={{
                        maxHeight: "17rem",
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
                        height: "6rem",
                        bottom : "1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1
                    }}>
                        <Typography align="center" style={{position: "relative", top:"5px"}}>
                                {props.user?.practice1}
                        </Typography>
                        <Typography align="center" style={{position: "relative", top:"5px"}}>
                            {props.user?.practice2}
                        </Typography>
                </div>
            </div>
        </>
    )
}
