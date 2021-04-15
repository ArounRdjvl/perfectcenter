import React from "react"
import animation from "../assets/logo.json"
import Lottie from "react-lottie";

export function Logo() {
    const bodymovinOptions = {
        loop: false,
        autoplay: true,
        prerender: true,
        animationData: animation
    }

    return (
        <div>
            <Lottie options={bodymovinOptions} height={400} width={400} />
        </div>
    )
}