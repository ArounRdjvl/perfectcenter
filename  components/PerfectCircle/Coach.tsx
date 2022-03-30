import React from "react"
import { Grid, useTheme, Typography, useMediaQuery} from "@material-ui/core"
import { Divider } from "../Divider"
import { colors } from "modules/theme"
import { PraticienType } from "modules/types"
import Link from "next/link"

export interface CoachProps {
    user: PraticienType 
}

const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.backgroundColor = "#BFC7C4"
    box.style.transitionDuration = "800ms"
}

  // This function will be triggered when the mouse pointer is moving out the box
const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.backgroundColor = "#EBEAE8"
}

export function Coach(props: CoachProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <>
            <Link href={`perfectcircle/${props.user.name.toLowerCase().split(/\s/).join("_")}`}>
                <div
                    onMouseOver={boxMouseOverHandler}
                    onMouseLeave={boxMouseOutHandler}

                    style={{
                        width: "19rem",
                        height: "28rem",
                        borderRadius: "35px",
                        margin: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#BFC7C4",
                        cursor: "pointer"
                    }}>

                    <div
                        style={{
                            borderRadius: 20,
                            width: "100%",
                            height: "5rem",
                            display: "flex",
                            alignItems: "center",
                            padding: "0rem 1rem",
                            justifyContent: "center",
                            zIndex: 1,
                        }}>
                            <Typography variant="h3" align="center">
                                {props.user.name}
                            </Typography>
                    </div>
                    <img
                        style={{
                            height: "17rem",
                            display: "flex",
                            borderRadius: "15px",
                            zIndex: 2
                        }}
                        alt={props.user.name}
                        src={props.user.photo}
                    />
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            marginTop : "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                        }}>
                            <Typography align="center" style={{position: "relative", top:"5px"}}>
                                    {props.user.practice1}
                            </Typography>
                    </div>
                </div>
            </Link>
            </>
        )
    }
    return (
        <>
            <Link href={`perfectcircle/${props.user.name.toLowerCase().split(/\s/).join("_")}`}>
                <div
                    onMouseOver={boxMouseOverHandler}
                    onMouseLeave={boxMouseOutHandler}

                    style={{
                        width: "19rem",
                        height: "28rem",
                        borderRadius: "35px",
                        margin: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer"
                    }}>

                    <div
                        style={{
                            borderRadius: 20,
                            width: "100%",
                            height: "5rem",
                            display: "flex",
                            alignItems: "center",
                            padding: "0rem 1rem",
                            justifyContent: "center",
                            zIndex: 1,
                        }}>
                            <Typography variant="h3" align="center">
                                {props.user.name}
                            </Typography>
                    </div>
                    <img
                        style={{
                            height: "17rem",
                            display: "flex",
                            borderRadius: "15px",
                            zIndex: 2
                        }}
                        alt={props.user.name}
                        src={props.user.photo}
                    />
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            marginTop : "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                        }}>
                            <Typography align="center" style={{position: "relative", top:"5px"}}>
                                    {props.user.practice1}
                            </Typography>
                    </div>
                </div>
            </Link>
        </>
    )
}
