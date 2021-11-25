import {
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core"
import React from "react"
import { colors } from "../../modules/theme"
import { TitleBar } from " components/TitleBar"

export function WelcomeMsg2() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1rem",
                    }}
                >
                    <TitleBar
                        title="PerfectCirle"
                        background={true}
                        color="vert"
                        paddingMobile="0 0 0 7vw"
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "2rem",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            borderRadius: "20px 20px 0 0",
                            height: "8rem",
                            width: "9rem",
                            backgroundImage: "url(/erik.png)",
                            backgroundPosition: "center",
                            backgroundSize: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: colors.beige,
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "90%",
                            borderRadius: "30px",
                            padding: "0.5rem 0.5rem",
                            top: 0,
                        }}
                    >
                        <Typography variant="h4" align="center">
                            Erik HENRION
                            <br />- Fondateur de PerfectCenter -
                        </Typography>
                    </div>
                    <div
                        style={{
                            padding: "1rem 12vw",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Typography variant="body1" align="justify">
                            Coach, thérapeute, conférencier, consultant,
                            sophrologue, coach sportif... Nous capitalisons nos
                            talents pour offrir des prestations liées au
                            bien-être et au développement de tout potentiel, de
                            son vrai "Soi". En entreprise et en individuel, en
                            présentiel ou en distanciel, nos palettes sont
                            infinies pour répondre aux besoins des personnes qui
                            viennent à nous...
                            <br />
                            Nous créons des événements, formations et ateliers
                            en collectif en plus des consultations individuelles
                            que nous pouvons proposer.
                        </Typography>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <TitleBar
                title="PerfectCircle"
                background={true}
                color="vert"
                paddingMobile="0 0 0 5vw"
            />
            <div
                style={{
                    position: "absolute",
                    width: "56vw",
                    height: "50vh",
                    display: "flex",
                    marginTop: "2vw",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: colors.beige,
                            position: "relative",
                            display: "flex",
                            justifyContent: "flex-start",
                            paddingLeft: "3vw",
                            marginTop: "1rem",
                            alignItems: "center",
                            height: "3rem",
                            width: "100%",
                            borderRadius: "25px",
                            top: 0,
                        }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            style={{ fontStyle: "italic" }}
                        >
                            Erik HENRION - Fondateur de PerfectCenter
                        </Typography>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "13vw",
                            height: "13vw",
                            maxHeight: "13rem",
                            maxWidth: "13rem",
                            right: 0,
                            backgroundColor: colors.noir,
                            borderRadius: "20px",
                            backgroundImage: "url(/erik.png)",
                            backgroundPosition: "center",
                            backgroundSize: "100%",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "42vw",
                        padding: " 1rem 3rem 0 4vw",
                    }}
                >
                    <Typography variant="body1" align="justify">
                        Coach, thérapeute, conférencier, consultant,
                        sophrologue, coach sportif... Nous capitalisons nos
                        talents pour offrir des prestations liées au bien-être
                        et au développement de tout potentiel, de son vrai
                        "Soi". En entreprise et en individuel, en présentiel ou
                        en distanciel, nos palettes sont infinies pour répondre
                        aux besoins des personnes qui viennent à nous...
                        <br />
                        Nous créons des événements, formations et ateliers en
                        collectif en plus des consultations individuelles que
                        nous pouvons proposer.
                    </Typography>
                </div>
            </div>
        </>
    )
}
