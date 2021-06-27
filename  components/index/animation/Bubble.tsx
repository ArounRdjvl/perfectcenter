import { animated, useSpring } from "react-spring"

interface BubbleProps {
    text?: string
    from: { x: any; y: any }
    to: { x: any; y: any }
    color: any
    size: any
}

export function Bubble(props: BubbleProps) {
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
