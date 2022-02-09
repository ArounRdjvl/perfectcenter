import React from "react"
import Head from "next/head"
import { Navigation } from "../../ components/Navigation"
import { Container, Typography } from "@material-ui/core"
import { colors } from "../../modules/theme"
import { Footer } from "../../ components/Footer"
import { TitleBar } from "../../ components/TitleBar"
import { dataMembres } from "../../modules/data"
import { AccueilProduit } from " components/PerfectCare/AccueilProduit"
import { LumiereMusique } from " components/PerfectCare/Psio/LumiereMusique"
import { AchatPsio } from " components/PerfectCare/Psio/AchatPsio"
import { BanniereInfo } from " components/BanniereInfo"
import { BulleInfo } from " components/BulleInfo"
import { AccueilCoach } from " components/PerfectCircle/AccueilCoach"
import { RdvCoach } from " components/PerfectCircle/RdvCoach"

export default function laurent() {
    const ref = React.useRef<HTMLDivElement>(null)
    return (
        <div ref={ref}>
            <Head>
                <title>Laurent BROSSEAU</title>
            </Head>
            <Navigation />
            {/* A terme, il serait intéressant de récupérer ces infos de la base de donnée */}
            <AccueilCoach titre="Laurent BROSSEAU" pratique="Préparateur Physique et Mental" description="Dis-moi Où Tu As Mal, Je Te Dirai Qui Tu Es
                                J'ai libéré ma vocation d'aide aux autres, en suivant une formation de sophrologue.
                                Puis, souhaitant aussi appréhender le corps physique, j'ai décidé de me former aux modelages du monde pour soulager les tensions, les douleurs. Après plusieurs formations en techniques énergétiques, j'ai compris que pour apporter de l'aide à mes patients, il fallait apporter des soins holistiques en alliant le physique, le mental et la sphère émotionnelle.
                                Oscillant entre le France et le Maroc, je vous propose des soins sur mesure, utilisant l'écoute active, le dialogue bienveillant, le changement de visions, les soins énergétiques, les modelages du monde...
                                En apaisant le mental et en régulant l'émotionnel, le corps lâche prise et la voix de la libération surgit.
                                Mon objectif est de faire comprendre à chacun, que les solutions remèdes se trouvent en soi, et qu'il faut trouver les clés pour ouvrir la porte du bien-être et du bonheur.
                                Ensemble, nous décoderons les souffrances, pour les déprogrammer et retrouver votre être originel. En travaillant sur l'alignement et le rééquilibrage énergétique.
                                Je vous conduirai sur le chemin du moment présent, car c'est bien là que nous devons tous être."/>
            <RdvCoach pratique="Pratique 1"/>
            <Footer />
        </div>
    )
}
