import React from "react"
import { Button, Grid, Link, Typography, useTheme } from "@material-ui/core"
import { Divider } from "./Divider"
import { TitleBar } from "./TitleBar"
import { getRedirectStatus } from "next/dist/lib/load-custom-routes"

export interface ProductProps {
    name?: string
    title?: string
    desc?: JSX.Element
    moreAboutLink?: string
}

export interface DisplayProps {
    pair?: boolean
    product?: ProductProps
}

export function Product(props: DisplayProps) {
    const theme = useTheme()
    if (props.pair) {
        return (
            <>
                <TitleBar color="vert" title={props.product?.name} />
                <Grid
                    container
                    justify="center"
                    style={{
                        maxHeight: "60rem",
                        marginBottom: "5rem"
                    }}
                >
                    <Grid
                        xs={1}
                        style={{
                            position: "relative"
                        }}
                        item
                    >
                        <div
                            style={{
                                backgroundColor: "#3B424A",
                                position: "absolute",
                                borderRadius: "20px",
                                height: "8rem",
                                width: "30rem",
                                top: 0,
                                left: "5rem"
                            }}
                        />
                    </Grid>
                    <Grid
                        xs={8}
                        style={{
                            position: "relative",
                            zIndex: 4,
                            margin: theme.spacing(2)
                        }}
                        item
                    >
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "#E3CCB4",
                                borderRadius: "20px",
                                padding: theme.spacing(2),
                                zIndex: 3,
                                top: "1rem"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    zIndex: 3,
                                    alignSelf: "center"
                                }}
                            >
                                <img
                                    style={{
                                        maxHeight: "20rem",
                                        maxWidth: "12rem",
                                        borderRadius: "20px"
                                    }}
                                    alt={props.product?.name}
                                    src={
                                        "./produits/" +
                                        props.product?.name +
                                        ".png"
                                    }
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    zIndex: 2,
                                    padding: theme.spacing(2)
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "center",
                                        zIndex: 2
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        style={{ alignSelf: "center" }}
                                    >
                                        {props.product?.title}
                                    </Typography>
                                    <Divider color="vert" />
                                </div>
                                <Typography
                                    variant="body1"
                                    align="justify"
                                    style={{
                                        paddingTop: theme.spacing(4),
                                        paddingBottom: theme.spacing(4)
                                    }}
                                >{props.product?.desc}</Typography>
                                <Link
                                    underline="none"
                                    target="_blank"
                                    href={props.product?.moreAboutLink}
                                    style={{
                                        alignSelf: "center",
                                        zIndex: 2
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        En savoir plus
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        xs={1}
                        style={{
                            position: "relative",
                            zIndex: 0
                        }}
                        item
                    >
                        <div
                            style={{
                                backgroundColor: "#849994",
                                position: "absolute",
                                borderRadius: "20px",
                                height: "8rem",
                                width: "30rem",
                                bottom: 0,
                                right: "5rem"
                            }}
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
    return (
        <>
            <TitleBar color="vert" title={props.product?.name} />
            <Grid
                container
                justify="center"
                style={{
                    maxHeight: "60rem",
                    marginBottom: "5rem"
                }}
            >
                <Grid
                    xs={1}
                    style={{
                        position: "relative"
                    }}
                    item
                >
                    <div
                        style={{
                            backgroundColor: "#3B424A",
                            position: "absolute",
                            borderRadius: "20px",
                            height: "8rem",
                            width: "30rem",
                            bottom: 0,
                            left: "5rem"
                        }}
                    />
                </Grid>
                <Grid
                    xs={8}
                    style={{
                        position: "relative",
                        zIndex: 4,
                        margin: theme.spacing(2)
                    }}
                    item
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#E3CCB4",
                            borderRadius: "20px",
                            padding: theme.spacing(2),
                            zIndex: 3,
                            top: "1rem"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                zIndex: 2,
                                padding: theme.spacing(2)
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "center",
                                    zIndex: 2
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    style={{ alignSelf: "center" }}
                                >
                                    {props.product?.title}
                                </Typography>
                                <Divider color="vert" />
                            </div>
                            <Typography
                                variant="body1"
                                align="justify"
                                style={{
                                    paddingTop: theme.spacing(4),
                                    paddingBottom: theme.spacing(4)
                                }}
                            >{props.product?.desc}</Typography>
                            <Link
                                underline="none"
                                target="_blank"
                                href={props.product?.moreAboutLink}
                                style={{
                                    alignSelf: "center",
                                    zIndex: 2
                                }}
                            >
                                <Button variant="contained" color="secondary">
                                    En savoir plus
                                </Button>
                            </Link>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                zIndex: 3,
                                alignSelf: "center"
                            }}
                        >
                            <img
                                style={{
                                    maxHeight: "20rem",
                                    maxWidth: "12rem",
                                    borderRadius: "20px"
                                }}
                                alt={props.product?.name}
                                src={
                                    "./produits/" + props.product?.name + ".png"
                                }
                            />
                        </div>
                    </div>
                </Grid>
                <Grid
                    xs={1}
                    style={{
                        position: "relative",
                        zIndex: 0
                    }}
                    item
                >
                    <div
                        style={{
                            backgroundColor: "#849994",
                            position: "absolute",
                            borderRadius: "20px",
                            height: "8rem",
                            width: "30rem",
                            top: 0,
                            right: "5rem"
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}
