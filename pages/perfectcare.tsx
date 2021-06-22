import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Background } from "../ components/Background"
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import CSS from "csstype"
import { Product } from "../ components/Product"

const dataProduct = {
    Product1: {
        name: "PSIO",
        title: "PSIO : Accélérateur de bien-être",
        desc: "Une solution innovante, simple et efficace à toute personne désireuse d'améliorer sa qualité de vie et retrouver sons bien-être. Utilisant la technologie de la stimulation sensorielle, le PSIO est une paire de lunette de lumino-relaxation qui envoie des sons et des lumières à des rythmes précis, avec plus de 200 programmes adaptés pour le matin, l'après-midi et le soir lors d'une méditation, une turbo-sieste ou une relaxation. <br/><br/> Etant une alternative aux médicaments et garantissant des effets durables, le PSIO agit entre autres sur le dysfonctionnement  corporel, le sommeil, la fatigue, le surmenage, la dépression, l'anxiété et la gestion des émotions.",
        moreAboutLink: "https://www.psio.com/fr/catalogue/psio-2.html"
    },
    Product2: {
        name: "MINT-E",
        title: "Utilisez la force de la nature",
        desc: "Mint-e propose une gamme de produits appréciée pour son efficacité. <br/><br/> Elle est conseillée par de nombreux médecins, thérapeutes et centre hospitaliers comme le Centre Léon Bérard à Lyon (Centre Régional de Lutte contre le Cancer) mais aussi par des sportifs de haut niveau. <br/><br/> Mint-e associe la phytothérapie, les Fleurs de Bach et des dilutions homéo-compatibles pour une action globale sur la santé et le bien-être",
        moreAboutLink: "https://mint-elabs.fr/products/z-trauma"
    }
}

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
                <Product pair={true} product={dataProduct.Product1} />
                <Product pair={false} product={dataProduct.Product2} />
                <Footer />
            </Container>
        </div>
    )
}
