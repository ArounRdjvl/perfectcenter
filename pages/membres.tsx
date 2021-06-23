import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Background } from "../ components/Background"
import { Membre } from "../ components/Membre"
import { Container } from "@material-ui/core"
import { Footer } from "../ components/Footer"
import { TitleBar } from "../ components/TitleBar"

const dataMembres = {
    membre1: {
        name: "Erik HENRION",
        photo: "membres/erik.png",
        poste: "Gérant - Fondateur",
        desc: "Passionné de technologies et de formations, ma conviction est que la technologie doit être au service de l'humain et non l'inverse. Après 25 années dans l'aéronautique, j'ai su revenir à ce qui me faisait vibrer !",
        facebook: "https://www.facebook.com/ErikHenrion",
        instagram: "https://www.instagram.com/erikhenrion",
        linkedin: "https://www.linkedin.com/in/henrionerik/"
    },
    membre2: {
        name: "Tom HENRION",
        photo: "membres/tom.png",
        poste: "Manager",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum ",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    membre3: {
        name: "Téo HENRION",
        photo: "membres/teo.png",
        poste: "Manager",
        desc: "Sportif de haut niveau en handball depuis plusieurs années, j'ai toujours été convaincu que le travail d'équipe était la solution pour réaliser de beaux projets, avec des valeurs communes. Je suis fier d'apporter mon énergie ainsi que mes compétences d'ingénieur conception et innovation de produit au sein de l'équipe Perfect !",
        facebook: "https://www.facebook.com/henrion.teo",
        instagram: "https://www.instagram.com/teo_hrn",
        linkedin: "https://www.linkedin.com/in/t%C3%A9o-henrion-39a9801a4"
    },
    membre4: {
        name: "Laurent BROSSEAU",
        photo: "membres/Laurent_BROSSEAU.png",
        poste: "Conseiller",
        desc: "Préparateur physique et mental, entraineur d'aviron. 20 ans d'expérience dans le management sportif, avec une flamme dynamique pour transmettre de l'énergie vers l'exploration de nos limites individuelles, et dans la synergie d'équipe. Je garde la vocation et le rêve de forger le mental au travers d'expériences sportives. le feeling pour adapter le haut niveau vers un sport santé qui a du sens pour chacun, à un moment donné de sa vie.",
        facebook: "https://www.facebook.com/laurent.ipp",
        instagram: "https://www.instagram.com/laurent_bross_blc/",
        linkedin: "https://www.linkedin.com/in/laurent-brosseau-a0004b52/"
    }
}

export default function membres() {
    const ref = React.useRef<HTMLDivElement>(null)

    return (
        <div ref={ref}>
            <Background elRef={ref} />

            <Head>
                <title>Notre Equipe</title>
            </Head>
            <Navigation />
            <Container>
                <TitleBar title="Notre Equipe" background={true} color="vert" />
                <Membre pair={true} user={dataMembres.membre1} />
                <Membre pair={false} user={dataMembres.membre2} />
                <Membre pair={true} user={dataMembres.membre3} />
                <Membre pair={false} user={dataMembres.membre4} />
                <Footer />
            </Container>
        </div>
    )
}
