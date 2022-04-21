import React from 'react'
import Head from 'next/head'
import { Container, Typography } from '@material-ui/core'
import { AccueilProduit } from 'components/PerfectCare/AccueilProduit'
import { LumiereMusique } from 'components/PerfectCare/Psio/LumiereMusique'
import { BanniereInfo } from 'components/BanniereInfo'
import { BulleInfo } from 'components/BulleInfo'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

export default function Psio() {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={ref}>
      <Head>
        <title>Psio</title>
      </Head>
      <Navigation />
      <AccueilProduit title="Lunettes Psio" path="/produits/PSIO.png" />
      <div style={{ height: '95vh' }} />
      <Container>
        <BanniereInfo
          titre="Lumière et luminothérapie"
          description="Équipé d'un lecteur MP3, ainsi que de nombreux programmes répondants à votre besoin, le PSiO combine de la musique ou de la relaxation par la voix avec la stimulation par la lumière. A la maison, au bureau, dans la voiture sur le bord d’une aire de repos ou encore dans l’avion, ce dispositif facilement transportable permet de se plonger instantanément dans un état de bien-être en profitant d’une récupération intense."
          photo="/produits/Psio2.png"
          photoSize="100%"
          photoHeight="18rem"
          photoWidth="16rem"
        />
      </Container>
      <div
        style={{
          width: '100%',
          marginTop: '8rem',
        }}
      >
        <Typography variant="h2" align="center">
          Les atouts du Psio
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
      <Container>
        <LumiereMusique />
      </Container>
      {/* <AchatPsio /> */}
      <Footer />
    </div>
  )
}
