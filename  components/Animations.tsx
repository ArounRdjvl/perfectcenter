import React from "react"
import { makeStyles, useTheme } from "@material-ui/core"
import { colors } from "../modules/theme"
import { useSpring, animated, config } from "react-spring"
import { AnimatedImage } from "./AnimatedImage"

export interface AnimationsProps {}

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
    const classes = useStyles(useTheme())
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
                size= "10rem"
            />
            <Bubble
                from={{ x: "35vw", y: "25vh" }}
                to={{ x: "22vw", y: "6vh" }}
                color={colors.beige}
                size= "6rem"
            />
            <Bubble
                from={{ x: "57vw", y: "16vh" }}
                to={{ x: "65vw", y: "0vh" }}
                color={colors.noir}
                size= "4rem"
            />
            <Bubble
                from={{ x: "52vw", y: "92vh" }}
                to={{ x: "57vw", y: "105vh" }}
                color={colors.noir}
                size= "4rem"
            />
            <Bubble
                from={{ x: "93vw", y: "47vh" }}
                to={{ x: "105vw", y: "47vh" }}
                color={colors.noir}
                size= "14rem"
            />
            <Bubble
                from={{ x: "90vw", y: "8vh" }}
                to={{ x: "105vw", y: "0vh" }}
                color={colors.beige}
                size= "7rem"
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
            
            <AnimatedImage url="picto/Feuille_grande.png" position={{x: "20vw", y : "17vh"}} width="6rem" />
            <AnimatedImage url="picto/Feuille.png" position={{x: "8vw", y : "40vh"}} width="7rem" />
            <AnimatedImage url="picto/Picto_fleur.png" position={{x: "75vw", y : "60vh"}} width="12rem" rotation={5} />
            <AnimatedImage url="picto/Picto_fleur.png" position={{x: "10vw", y : "53vh"}} width="14rem" rotation={-7} />
            <AnimatedImage url="picto/Feuille_grande.png" position={{x: "45vw", y : "76vh"}} width="7rem" rotation={135} mirror/>
            <AnimatedImage url="picto/Feuille.png" position={{x: "75vw", y : "40vh"}} width="7rem" rotation={30} />
            <AnimatedImage url="picto/Feuille.png" position={{x: "65vw", y : "15vh"}} width="7rem" rotation={180} mirror />


        </div>
    )
}

interface BubbleProps {
    text?: string
    from: { x: any; y: any }
    to: { x: any; y: any }
    color: any
    size: any
}

function Bubble(props: BubbleProps) {
    const [springProps, setSpring] = useSpring(() => ({
        from: {
            top: props.from.y,
            left: props.from.x,
            opacity: 0
        },
        to: async (next, cancel) => {
            await next({
                top: props.from.y,
                left: props.from.x,
                opacity: 1,
                config: {
                    tension: 210,
                    friction: 33
                }
            })
            await next({
                top: props.to.y,
                left: props.to.x,
                opacity: 0,
                config: {
                    mass: 80,
                    friction: 170
                }
            })
        },
        delay: 200
    }))

    return (
        <animated.div
            style={{
                position: "absolute",
                top: springProps.top,
                left: springProps.left,
                backgroundColor: props.color,
                opacity: springProps.opacity,
                height: props.size,
                width: props.size,
                display: "flex",
                borderRadius: "100% / 100%",
                zIndex: 5
            }}
        >
            <div style={{ margin: "auto", fontSize: 25 }}>{props.text}</div>
        </animated.div>
    )
}
