import React from 'react'
import Head from 'next/head'
import { Navigation } from '../../ components/Navigation'
import { Container, Typography } from '@material-ui/core'
import { colors } from '../../modules/theme'
import { Footer } from '../../ components/Footer'
import { TitleBar } from '../../ components/TitleBar'
import { dataMembres } from '../../modules/data'
import { AccueilProduit } from ' components/PerfectCare/AccueilProduit'
import { LumiereMusique } from ' components/PerfectCare/Psio/LumiereMusique'
import { AchatPsio } from ' components/PerfectCare/Psio/AchatPsio'
import { BanniereInfo } from ' components/BanniereInfo'
import { BulleInfo } from ' components/BulleInfo'

export default function minte() {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={ref}>
      <Head>
        <title>Mint-e</title>
      </Head>
      <Navigation />
      <AccueilProduit title="Mint-e" path="/produits/MINT-E.png" />
      <div style={{ height: '95vh' }} />
      <Container>
        <BanniereInfo
          titre="Utilisez la force de la nature"
          description="Mint-e propose une gamme de produits appréciée pour son efficacité.
                        Elle est conseillée par de nombreux médecins, thérapeutes et centre hospitaliers comme le Centre Léon Bérard à Lyon (Centre Régional de Lutte contre le Cancer) mais aussi par des sportifs de haut niveau.
                        Mint-e associe la phytothérapie, les Fleurs de Bach et des dilutions homéo-compatibles pour une action globale sur la santé et le bien-être"
          photo="../picto/Nature.png"
          photoSize="80%"
          photoHeight="14rem"
          photoWidth="14rem"
        />
      </Container>
      <div
        style={{
          width: '100%',
          marginTop: '8rem',
        }}
      >
        <Typography variant="h2" align="center">
          Les atouts des produits Mint-e
        </Typography>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          padding: '4rem 3rem',
        }}
      >
        <BulleInfo
          titre="Gestion des émotions"
          size="10rem"
          photoUrl="/picto/Gestion_emotions.png"
          photoSize="50%"
        />
        <BulleInfo titre="Fatigue" size="10rem" photoUrl="/picto/Fatigue.png" photoSize="60%" />
        <BulleInfo titre="Stress" size="10rem" photoUrl="/picto/Stress.png" photoSize="65%" />
        <BulleInfo
          titre="Dépression"
          size="10rem"
          photoUrl="/picto/Depression.png"
          photoSize="50%"
        />
        <BulleInfo titre="Addiction" size="10rem" photoUrl="/picto/Addiction.png" photoSize="60%" />
        <BulleInfo
          titre="Mémoire et apprentissage"
          size="10rem"
          photoUrl="/picto/Apprentissage.png"
          photoSize="60%"
        />
      </div>
      <AchatPsio />
      <Footer />
    </div>
  )
}
