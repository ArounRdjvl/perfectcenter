import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Membre } from "../ components/Membre"
import { Container } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"

const dataMembres = {
    membre1: {
        name: "Erik HENRION",
        photo: "membres/erik.png",
        poste: "Gérant - Fondateur",
        desc: "Passionné de technologies et de formations, ma conviction est que la technologie doit être au service de l'humain et non l'inverse.",
        facebook: "https://www.facebook.com/ErikHenrion",
        instagram: "https://www.instagram.com/erikhenrion",
        linkedin: "https://www.linkedin.com/in/henrionerik/"
    },
    membre2: {
        name: "Tom HENRION",
        photo: "membres/tom.png",
        poste: "Manager",
        desc: "Je suis en Génie Informatique mais en soit je sais pas ce que je fais là-bas. Je pense pas que je vais réussir car en vrai il y a vraiment beaucoup d’espace.",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre3: {
        name: "Téo HENRION",
        photo: "membres/teo.png",
        poste: "Manager",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing exercitationem repudiandae nemo iure aperiam!",
        facebook: "https://www.facebook.com/henrion.teo",
        instagram: "https://www.instagram.com/teo_hrn",
        linkedin: "https://www.linkedin.com/in/t%C3%A9o-henrion-39a9801a4"
    },
    membre4: {
        name: "Aroun RADJAVELOU",
        photo: "membres/aroun.png",
        poste: "Aucun Poste",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing exercitationem repudiandae nemo iure aperiam!",
        facebook: "https://www.facebook.com/aroun.rdj.rdj",
        instagram: "https://www.instagram.com/aroun.rdj/?hl=fr",
        linkedin: "https://www.linkedin.com/in/aroun-radjavelou-b25a10160/"
    },
    membre5: {
        name: "Laurent BROSSEAU",
        photo: "membres/aroun.png",
        poste: "Aucun Poste",
        desc: "Préparateur physique et mental, entraineur d'aviron. 20 ans d'expérience dans le management sportif, avec une flamme dynamique pour transmettre de l'énergie vers l'exploration de nos limites individuelles, et dans la synergie d'équipe. Je garde la vocation et le rêve de forger le mental au travers d'expériences sportives. le feeling pour adapter le haut niveau vers un sport santé qui a du sens pour chacun, à un moment donné de sa vie.",
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
                <Membre pair={true} user={dataMembres.membre5} />
                <Footer />
            </Container>
        </div>
    )
}
