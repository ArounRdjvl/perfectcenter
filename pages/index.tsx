import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Button } from "rsuite"
import "rsuite/lib/styles/index.less"
import "../styles/Home.module.less"

export default function index() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Navigation />

            <div className="hero">
                <h1 className="title">Welcome to React Suite</h1>
                <p className="description">
                    A suite of React components, intimate UI design, and a
                    friendly development experience.
                    <br />
                </p>
                <Button appearance="primary" href="https://rsuitejs.com/">
                    Getting started
                </Button>
            </div>

        </div>
    )
}
