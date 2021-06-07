import Link from "next/link"
import React from "react"
import {
    Grid,
    useTheme,
    Typography
} from "@material-ui/core"

const heightHeader = 90

export interface MembreProps {

}

export function Membre(props: MembreProps) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [shadow, setShadow] = React.useState<boolean>(false)
    const theme = useTheme()

    function handleClose() {
        setAnchorEl(null)
    }

    function handleScroll() {
        if (window.pageYOffset === 0) {
            setShadow(false)
        } else {
            setShadow(true)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <>

            <Grid style={{ minHeight: "10rem" }} justify="center" container>
                <Grid
                    xs={3}
                    style={{
                        position: "relative",
                        zIndex: 10
                    }}
                    item
                >

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        style={{
                            position: "absolute",
                            zIndex: 0
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#E3CCB4",
                                position: "absolute",
                                height: "100%",
                                width: "70%",
                                borderRadius: "30px"
                            }}
                        ></div>
                        <img
                            src="picto/facebook_fonce.png"
                            width={40}
                            style={{
                                margin: theme.spacing(1),
                                zIndex: 11
                            }}
                        />
                        <img
                            src="picto/Instagram_fonce.png"
                            width={40}
                            style={{
                                margin: theme.spacing(1),
                                zIndex: 11
                            }}
                        />
                        <img
                            src="picto/Linkedin_fonce.png"
                            width={40}
                            style={{
                                margin: theme.spacing(1),
                                zIndex: 11
                            }}
                        />

                    </Grid>
                    <div
                        style={{
                            position: "absolute",
                            marginLeft: "5rem",
                            zIndex: 0,
                        }}
                    >
                        <img
                            style={{
                                maxHeight: "12rem",
                                zIndex: 11,
                                marginTop: "1rem",
                                borderRadius: "30px"
                            }}
                            alt="complex"
                            src="tom.png"
                        />
                    </div>
                </Grid>
                <Grid
                    xs={6}
                    style={{
                        marginTop: "2rem",
                        position: "relative"
                    }}
                    item
                >
                    <div
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                            zIndex: 0,
                            position: "absolute",
                            height: "160%",
                            width: "130%",
                            left: "-30%",
                            borderRadius: "30px"
                        }}
                    ></div>
                    <div
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            margin: theme.spacing(2)
                        }}
                    >
                        <Typography
                            variant="h1"
                            align="center"
                        >
                            Tom Henrion
                            </Typography>
                        <Typography variant="h2" align="center">
                            Aucun Poste
                            </Typography>
                        <Typography variant="body1" align="center">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing exercitationem repudiandae nemo iure
                            aperiam!
                    </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
