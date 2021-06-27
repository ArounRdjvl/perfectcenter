import React from "react"
import animation from "../../../assets/logo.json"
import Lottie from "react-lottie"
import { useSpring, animated } from "react-spring"
import { heightHeader } from "../../Navigation"
import { useFlux } from "../../../modules/Flux"

export interface AnimatedLogoProps {
    delay: number
}

const menu: {
    current: boolean | null
} = {
    current: false
}

export function AnimatedLogo(props: AnimatedLogoProps) {
    const bodymovinOptions = {
        loop: false,
        autoplay: false,
        prerender: true,
        animationData: animation
    }

    const [play, setPlay] = React.useState<boolean>(false)

    const [menuOpen] = useFlux<boolean>("menuOpen")

    const [springProps, setSpring] = useSpring(() => ({
        top: 0,
        height: 0,
        opacity: 0
    }))

    const calculateSpringProps = () => {
        const ratio = window.pageYOffset / window.innerHeight
        const height = (1 - ratio) * 300 + heightHeader
        const defaultY = (window.innerHeight - height) / 2
        if (ratio < 0.8 && !menu.current) {
            return { top: (1 - ratio) * defaultY, height }
        }
        return { top: 0, height: heightHeader }
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
        window.addEventListener("scroll", () => handleEvent())
        window.addEventListener("resize", () => handleEvent())

        return () => {
            window.removeEventListener("scroll", () => handleEvent())
            window.removeEventListener("resize", () => handleEvent())
        }
    }, [])

    React.useEffect(() => {
        menu.current = menuOpen
        handleEvent()
    }, [menuOpen])

    return (
        <animated.div
            style={{
                opacity: springProps.opacity,
                height: springProps.height,
                top: springProps.top,
                position: "fixed",
                pointerEvents: "none",
                width: "100%",
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
