import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Membre } from "../ components/Membre"
import { Container } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"

const dataMembres = {
    membre1: {
        name: "Erik Henrion",
        photo: "membres/erik.png",
        poste: "Gérant - Fondateur",
        desc: "Passionné de technologies et de formations, ma conviction est que la technologie doit être au service de l'humain et non l'inverse. Il est BG le daron !",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre2: {
        name: "Tom Henrion",
        photo: "membres/tom.png",
        poste: "Manager (askip)",
        desc: "Je suis en Génie Informatique mais en soit je sais pas ce que je fais là-bas. Faut trouver des trucs a dire. Je pense pas que je vais réussir car en vrai il y a vraiment beaucoup d’espace.",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre3: {
        name: "Téo Henrion",
        photo: "membres/teo.png",
        poste: "Mascotte de PerfectCenter",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing exercitationem repudiandae nemo iure aperiam!",
        facebook: "https://www.facebook.com/henrion.teo",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre4: {
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
                <TitleBar title="Notre Equipe" background={true} color="vert"/>
                <Membre pair={true} user={dataMembres.membre1} />
                <Membre pair={false} user={dataMembres.membre2} />
                <Membre pair={true} user={dataMembres.membre3} />
                <Membre pair={false} user={dataMembres.membre4} />
                <Footer />
            </Container>
        </div>
    )
}
