import React from "react"
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core"
import { colors } from "../../../modules/theme"
import { useSpring, animated, config } from "react-spring"
import { AnimatedImage } from "./AnimatedImage"
import { Bubble } from "./Bubble"

export interface AnimationsProps { }

const useStyles = makeStyles((theme) => ({
    root: {
        top: 0,
        position: "absolute",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
    }
}))

export function Animations(props: AnimationsProps) {
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <div className={classes.root}>
                <Bubble
                    text="Dépression"
                    from={{ x: "-5vw", y: "0vh" }}
                    to={{ x: "-52vw", y: "50vh" }}
                    color={colors.beige}
                    size="8rem"
                />
                <Bubble
                    from={{ x: "5vw", y: "80vh" }}
                    to={{ x: "-10vw", y: "75vh" }}
                    color={colors.noir}
                    size="2rem"
                />
                <Bubble
                    from={{ x: "25vw", y: "52vh" }}
                    to={{ x: "4vw", y: "60vh" }}
                    color={colors.vert}
                    size="4rem"
                />
                <Bubble
                    text="Addiction"
                    from={{ x: "30vw", y: "80vh" }}
                    to={{ x: "26vw", y: "100vh" }}
                    color={colors.beige}
                    size="6rem"
                />
                <Bubble
                    from={{ x: "57vw", y: "16vh" }}
                    to={{ x: "65vw", y: "0vh" }}
                    color={colors.noir}
                    size="4rem"
                />
                <Bubble
                    from={{ x: "52vw", y: "92vh" }}
                    to={{ x: "57vw", y: "105vh" }}
                    color={colors.noir}
                    size="4rem"
                />
                <Bubble
                    from={{ x: "93vw", y: "47vh" }}
                    to={{ x: "105vw", y: "47vh" }}
                    color={colors.noir}
                    size="2rem"
                />
                <Bubble
                    from={{ x: "90vw", y: "8vh" }}
                    to={{ x: "105vw", y: "0vh" }}
                    color={colors.beige}
                    size="3rem"
                />
                <Bubble
                    text="Stress"
                    from={{ x: "70vw", y: "22vh" }}
                    to={{ x: "83vw", y: "8vh" }}
                    color={colors.vert}
                    size="5rem"
                />
                <Bubble
                    text="Insomnie"
                    from={{ x: "67vw", y: "67vh" }}
                    to={{ x: "83vw", y: "77vh" }}
                    color={colors.beige}
                    size="8rem"
                />

                <AnimatedImage url="picto/Feuille_grande_Beige.png" position={{ x: "-5vw", y: "45vh" }} width="6rem" rotation={60} />
                <AnimatedImage url="picto/Feuille.png" position={{ x: "85vw", y: "55vh" }} width="4rem" rotation={170} mirror />
                <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "65vw", y: "10vh" }} width="9rem" rotation={15} />
                <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "10vw", y: "70vh" }} width="10rem" rotation={160} mirror />
                <AnimatedImage url="picto/Feuille_grande.png" position={{ x: "25vw", y: "68vh" }} width="6rem" rotation={190} mirror />
                <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "-4vw", y: "65vh" }} width="4rem" rotation={200} mirror />
                <AnimatedImage url="picto/Feuille.png" position={{ x: "58vw", y: "78vh" }} width="4rem" rotation={215} mirror />
                <AnimatedImage url="picto/Feuille.png" position={{ x: "51vw", y: "19vh" }} width="4rem" rotation={20} />
                <AnimatedImage url="picto/Feuille_grande.png" position={{ x: "80vw", y: "15vh" }} width="4rem" rotation={190} mirror />
                <AnimatedImage url="picto/Feuille_grande_Beige.png" position={{ x: "80vw", y: "70vh" }} width="6rem" rotation={210} mirror />
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Bubble
                text="Dépression"
                from={{ x: "5vw", y: "15vh" }}
                to={{ x: "-5vw", y: "10vh" }}
                color={colors.beige}
                size="14rem"
            />
            <Bubble
                from={{ x: "0vw", y: "65vh" }}
                to={{ x: "-10vw", y: "75vh" }}
                color={colors.noir}
                size="9rem"
            />
            <Bubble
                from={{ x: "25vw", y: "52vh" }}
                to={{ x: "4vw", y: "60vh" }}
                color={colors.vert}
                size="4rem"
            />
            <Bubble
                text="Addiction"
                from={{ x: "30vw", y: "80vh" }}
                to={{ x: "26vw", y: "100vh" }}
                color={colors.beige}
                size="10rem"
            />
            <Bubble
                from={{ x: "35vw", y: "25vh" }}
                to={{ x: "22vw", y: "6vh" }}
                color={colors.beige}
                size="6rem"
            />
            <Bubble
                from={{ x: "57vw", y: "16vh" }}
                to={{ x: "65vw", y: "0vh" }}
                color={colors.noir}
                size="4rem"
            />
            <Bubble
                from={{ x: "52vw", y: "92vh" }}
                to={{ x: "57vw", y: "105vh" }}
                color={colors.noir}
                size="4rem"
            />
            <Bubble
                from={{ x: "93vw", y: "47vh" }}
                to={{ x: "105vw", y: "47vh" }}
                color={colors.noir}
                size="14rem"
            />
            <Bubble
                from={{ x: "90vw", y: "8vh" }}
                to={{ x: "105vw", y: "0vh" }}
                color={colors.beige}
                size="7rem"
            />
            <Bubble
                text="Stress"
                from={{ x: "70vw", y: "22vh" }}
                to={{ x: "83vw", y: "8vh" }}
                color={colors.vert}
                size="8rem"
            />
            <Bubble
                text="Insomnie"
                from={{ x: "67vw", y: "67vh" }}
                to={{ x: "83vw", y: "77vh" }}
                color={colors.beige}
                size="13rem"
            />

            <AnimatedImage url="picto/Feuille_grande_Beige.png" position={{ x: "33vw", y: "13vh" }} width="8rem" />
            <AnimatedImage url="picto/Feuille.png" position={{ x: "25vw", y: "45vh" }} width="7rem" rotation={-30} />
            <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "6vw", y: "17vh" }} width="15rem" rotation={-7} />
            <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "65vw", y: "37vh" }} width="15rem" rotation={190} mirror />
            <AnimatedImage url="picto/Feuille_grande.png" position={{ x: "25vw", y: "68vh" }} width="10rem" rotation={190} mirror />
            <AnimatedImage url="picto/Picto_fleur.png" position={{ x: "-4vw", y: "65vh" }} width="20rem" rotation={200} mirror />
            <AnimatedImage url="picto/Feuille.png" position={{ x: "58vw", y: "78vh" }} width="9rem" rotation={215} mirror />
            <AnimatedImage url="picto/Feuille.png" position={{ x: "51vw", y: "19vh" }} width="7rem" rotation={20} />
            <AnimatedImage url="picto/Feuille_grande.png" position={{ x: "80vw", y: "15vh" }} width="10rem" rotation={190} mirror />
            <AnimatedImage url="picto/Feuille_grande_Beige.png" position={{ x: "80vw", y: "70vh" }} width="12rem" rotation={210} mirror />
        </div>
    )
}