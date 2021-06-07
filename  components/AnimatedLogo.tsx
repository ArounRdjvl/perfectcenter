import React from "react"
import animation from "../assets/logo.json"
import Lottie from "react-lottie";
import { useSpring, animated } from "react-spring";

export function AnimatedLogo() {
    const bodymovinOptions = {
        loop: false,
        autoplay: true,
        prerender: true,
        animationData: animation
    }

    function calculateSpringProps() {
        const ratio = window.pageYOffset / window.innerHeight
        if (ratio < 0.7) {
            return { top: (1 - ratio) * 200, height: (1 - ratio) * 300 + 100 }
        }
        return { top: 0, height: 100 }
    }

    const [springProps, setSpring] = useSpring(() => ({ top: 0, height: 0, opacity: 0 }))

    React.useEffect(() => {
        setSpring({...calculateSpringProps(), opacity: 1, immediate: true})
    }, [])

    const handleScroll = () => {
        setSpring(calculateSpringProps())
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <animated.div style={{
            width: 400,
            left: "50%",
            opacity: springProps.opacity,
            marginLeft: -200,
            height: springProps.height,
            position: "fixed",
            top: springProps.top,
            zIndex: 10
        }}>
            <Lottie options={bodymovinOptions} style={{ margin: "auto" }} />
        </animated.div>
    )
}