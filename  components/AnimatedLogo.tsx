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

    const [springProps, setSpring] = useSpring(() => ({ top: 200, height: 400 }));

    const handleScroll = () => {
        const ratio = window.pageYOffset / window.innerHeight
        if (ratio < 1) {
            setSpring({ top: (1 - ratio) * 200, height: (1 - ratio) * 300 + 100 })
        } else {
            setSpring({ top: 0, height: 100 })
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <animated.div style={{
            width: "100%",
            height: springProps.height,
            position: "fixed",
            top: springProps.top,
            zIndex: 10
        }}>
            <Lottie options={bodymovinOptions} style={{ margin: "auto" }} />
        </animated.div>
    )
}