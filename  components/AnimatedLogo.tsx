import React from "react"
import animation from "../assets/logo.json"
import Lottie from "react-lottie"
import { useSpring, animated } from "react-spring"

export interface AnimatedLogoProps {
    delay: number
}

export function AnimatedLogo(props: AnimatedLogoProps) {
    const bodymovinOptions = {
        loop: false,
        autoplay: false,
        prerender: true,
        animationData: animation
    }

    const [play, setPlay] = React.useState<boolean>(false)

    const [springProps, setSpring] = useSpring(() => ({
        top: 0,
        height: 0,
        opacity: 0
    }))

    function calculateSpringProps() {
        const ratio = window.pageYOffset / window.innerHeight
        const height = (1 - ratio) * 300 + 100
        const defaultY = (window.innerHeight - height) / 2
        if (ratio < 0.7) {
            return { top: (1 - ratio) * defaultY, height }
        }
        return { top: 0, height: 100 }
    }

    React.useEffect(() => {
        setSpring({
            ...calculateSpringProps(),
            opacity: 0,
            immediate: true
        })
        setTimeout(() => {
            setSpring({
                ...calculateSpringProps(),
                opacity: 1
            })
            setPlay(true)
        }, props.delay)
    }, [])

    const handleEvent = () => {
        setSpring(calculateSpringProps())
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleEvent)
        window.addEventListener("resize", handleEvent)

        return () => {
            window.removeEventListener("scroll", handleEvent)
            window.removeEventListener("resize", handleEvent)
        }
    }, [])

    return (
        <animated.div
            style={{
                width: 400,
                left: "50%",
                opacity: springProps.opacity,
                marginLeft: -200,
                height: springProps.height,
                position: "fixed",
                top: springProps.top,
                zIndex: 10
            }}
        >
            <Lottie
                options={bodymovinOptions}
                isStopped={!play}
                style={{ margin: "auto" }}
            />
        </animated.div>
    )
}
