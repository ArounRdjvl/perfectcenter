import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Background } from "../ components/Background"
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import CSS from "csstype"
import { Product } from "../ components/Product"
import { dataProducts } from "../modules/data"

export default function perfectcare() {
    const ref = React.useRef<HTMLDivElement>(null)

    const itemStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    }

    const imageHandleStyle: CSS.Properties = {
        flexGrow: 1,
        display: "flex",
        width: "7rem",
        height: "7rem"
    }

    return (
        <div ref={ref}>
            <Background elRef={ref} />

            <Head>
                <title>PerfectCare</title>
            </Head>
            <Navigation />
            <Container>
                <TitleBar title="Nos produits" background={true} color="vert" />
                {dataProducts.map((product, i) => {
                    const pair = i % 2 == 0
                    return <Product pair={pair} product={product} />
                })}
                <Footer />
            </Container>
        </div>
    )
}
