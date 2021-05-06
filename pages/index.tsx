import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import "../styles/Home.module.less"
import { Logo } from "../ components/Logo"

export default function index() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Navigation />

            <Logo />

            <div className="hero">
                <h1 className="title">Welcome to React Suite</h1>
                <p className="description">
                    A suite of React components, intimate UI design, and a
                    friendly development experience.
                    <br />
                </p>
            </div>

        </div>
    )
}
