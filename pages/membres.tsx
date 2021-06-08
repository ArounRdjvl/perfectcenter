import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Membre } from "../ components/Membre"
import "../styles/Home.module.less"
import { Container } from "@material-ui/core"
import { Footer } from "../ components/Footer"

const dataMembres = {
    membre1: {
        name: "Tom Henrion",
        photo: "membres/tom.png",
        poste: "Aucun Poste",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing exercitationem repudiandae nemo iure aperiam!",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre2: {
        name: "Aroun Radjavelou",
        photo: "membres/aroun.png",
        poste: "Aucun Poste",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing exercitationem repudiandae nemo iure aperiam!",
        facebook: "https://www.facebook.com/aroun.rdj.rdj",
        instagram: "https://www.instagram.com/aroun.rdj/?hl=fr",
        linkedin: "https://www.linkedin.com/in/aroun-radjavelou-b25a10160/"
    }
}

export default function membres() {
    return (
        <div>
            <Head>
                <title>Notre Equipe</title>
            </Head>
            <Container>
                <Navigation />
                <Membre pair={true} user={dataMembres.membre1} />
                <Membre pair={false} user={dataMembres.membre2} />
                <Footer />
            </Container>
        </div>
    )
}
