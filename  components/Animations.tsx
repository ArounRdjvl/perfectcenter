import React from "react"
import { makeStyles, useTheme } from "@material-ui/core"
import { colors } from "../modules/theme"
import { useSpring, animated, config } from "react-spring"

export interface AnimationsProps {}

const useStyles = makeStyles((theme) => ({
    root: {
        top: 0,
        position: "absolute",
        width: "100%",
        height: "100vh"
    }
}))

export function Animations(props: AnimationsProps) {
    const classes = useStyles(useTheme())
    return (
        <div className={classes.root}>
            <Bubble
                text="Stress"
                from={{ x: "30vw", y: "30vh" }}
                to={{ x: "5vw", y: "20vh" }}
                color={colors.beige}
                size="7rem"
            />
            <Bubble
                text="Dépression"
                from={{ x: "60vw", y: "30vh" }}
                to={{ x: "80vw", y: "10vh" }}
                color={colors.vert}
                size="9rem"
            />
            <Bubble
                text="Dépendance"
                from={{ x: "20vw", y: "60vh" }}
                to={{ x: "0vw", y: "90vh" }}
                color={colors.vert}
                size="10rem"
            />

            <Bubble
                from={{ x: "70vw", y: "70vh" }}
                to={{ x: "90vw", y: "80vh" }}
                color={colors.noir}
                size="4rem"
            />
            <Bubble
                from={{ x: "65vw", y: "50vh" }}
                to={{ x: "75vw", y: "55vh" }}
                color={colors.beige}
                size="3rem"
            />
            <Bubble
                from={{ x: "30vw", y: "45vh" }}
                to={{ x: "0vw", y: "40vh" }}
                color={colors.vert}
                size="5rem"
            />
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
                    friction: 30
                }
            })
            await next({
                top: props.to.y,
                left: props.to.x,
                opacity: 0,
                config: {
                    mass: 19.6,
                    friction: 160
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
