import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Divider } from "../ components/Divider"
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"
import { Article } from "../ components/Article"
import CSS from "csstype"

const dataArticle = {
    Article1: {
        name: "Luminothérapie",
        photo: "article/luminotherapie.png",
        description: "Il est important de rappeler que la luminothérapie n’est pas une lubie récente mais qu’elle remonte à l’antiquité, bien que cette pratique ait vraiment été légitimé aux alentours du XXème siècle. Voici donc un article qui va vous éclairer.."
    }
}

export default function articles() {
    return (
        <div>
            <Head>
                <title>Articles</title>
            </Head>
            <Container>
                <Navigation />

                <TitleBar title="Nos articles" background={true} color="vert"/>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "flex-start",
                        justifyContent: "space-evenly",
                        margin: "1rem 0"
                    }}>

                    <Article pair={true} user={dataArticle.Article1} />
                    
                </div>
                <Footer />
            </Container>
        </div>
    )
}
