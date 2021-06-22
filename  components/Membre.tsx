import React from "react"
import { Grid, useTheme, Typography } from "@material-ui/core"
import { Divider } from "./Divider"

export interface UserProps {
    photo?: string
    name?: string
    poste?: string
    desc?: string
    facebook?: string
    linkedin?: string
    instagram?: string
}

export interface MembreProps {
    pair?: boolean
    user?: UserProps
}

export function Membre(props: MembreProps) {
    const theme = useTheme()
    const pair = props.pair

    if (pair) {
        return (
            <>
                <Grid
                    justify="center"
                    container
                    style={{
                        maxHeight: "40rem",
                        marginLeft:"-5rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Grid
                        xs={3}
                        style={{
                            position: "relative",
                            zIndex: 3
                        }}
                        item
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                paddingLeft: "0.8rem",
                                backgroundColor: "#E3CCB4",
                                position: "absolute",
                                height: "12rem",
                                width: "70%",
                                borderRadius: "20px"
                            }}
                        >
                            <a href={props.user?.facebook} target="_blank">
                                <img
                                    src="picto/Facebook_fonce.png"
                                    width={40}
                                    style={{
                                        zIndex: 2
                                    }}
                                />
                            </a>
                            <a href={props.user?.instagram} target="_blank">
                                <img
                                    src="picto/Instagram_fonce.png"
                                    width={40}
                                    style={{
                                        zIndex: 2
                                    }}
                                />
                            </a>
                            <a href={props.user?.linkedin} target="_blank">
                                <img
                                    src="picto/Linkedin_fonce.png"
                                    width={40}
                                    style={{
                                        zIndex: 2
                                    }}
                                />
                            </a>
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                top: "1rem",
                                left: "4rem"
                            }}
                        >
                            <img
                                style={{
                                    maxHeight: "12rem",
                                    borderRadius: "20px"
                                }}
                                alt={props.user?.name}
                                src={props.user?.photo}
                            />
                        </div>
                    </Grid>
                    <Grid
                        xs={6}
                        style={{
                            position: "relative",
                            paddingTop: "3rem"
                        }}
                        item
                    >
                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                                margin: theme.spacing(2),
                                color: "white",
                                paddingRight:theme.spacing(5)
                            }}
                        >
                            <Typography variant="h2" align="center">
                                {props.user?.name}
                            </Typography>
                            <Divider color="beige" />
                            <Typography
                                variant="h4"
                                align="center"
                                style={{
                                    margin: theme.spacing(1)
                                }}
                            >
                                {props.user?.poste}
                            </Typography>
                            <Typography variant="body1" align="justify">
                                {props.user?.desc}
                            </Typography>
                        </div>
                        <div
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                                position: "absolute",
                                height: "80%",
                                width: "130%",
                                right: 0,
                                bottom: 0,
                                borderRadius: "20px"
                            }}
                        ></div>
                    </Grid>
                </Grid>
            </>
        )
    }
    return (
        <>
            <Grid
                justify="center"
                container
                style={{
                    maxHeight: "40rem",
                    marginLeft:"5rem",
                    marginBottom: "3rem"
                }}
            >
                <Grid
                    xs={6}
                    style={{
                        position: "relative",
                        paddingTop: "3rem"
                    }}
                    item
                >
                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                            margin: theme.spacing(2),
                            paddingLeft:theme.spacing(5)
                        }}
                    >
                        <Typography variant="h2" align="center">
                            {props.user?.name}
                        </Typography>
                        <Divider color="vert" />
                        <Typography
                            variant="h4"
                            align="center"
                            style={{
                                margin: theme.spacing(1)
                            }}
                        >
                            {props.user?.poste}
                        </Typography>
                        <Typography variant="body1" align="justify">
                            {props.user?.desc}
                        </Typography>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#E3CCB4",
                            position: "absolute",
                            height: "80%",
                            width: "130%",
                            left: 0,
                            bottom: 0,
                            borderRadius: "20px"
                        }}
                    ></div>
                </Grid>
                <Grid
                    xs={3}
                    style={{
                        position: "relative",
                        zIndex: 3
                    }}
                    item
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "flex-end",
                            paddingRight: "0.8rem",
                            backgroundColor: theme.palette.secondary.main,
                            position: "absolute",
                            height: "12rem",
                            width: "70%",
                            right: 0,
                            borderRadius: "20px"
                        }}
                    >
                        <a href={props.user?.facebook} target="_blank">
                            <img
                                src="picto/Facebook_clair.png"
                                width={40}
                                style={{
                                    zIndex: 2
                                }}
                            />
                        </a>
                        <a href={props.user?.instagram} target="_blank">
                            <img
                                src="picto/Instagram_clair.png"
                                width={40}
                                style={{
                                    zIndex: 2
                                }}
                            />
                        </a>
                        <a href={props.user?.linkedin} target="_blank">
                            <img
                                src="picto/Linkedin_clair.png"
                                width={40}
                                style={{
                                    zIndex: 2
                                }}
                            />
                        </a>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "1rem",
                            right: "4rem"
                        }}
                    >
                        <img
                            style={{
                                maxHeight: "12rem",
                                borderRadius: "20px"
                            }}
                            alt={props.user?.name}
                            src={props.user?.photo}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
