import React from 'react'
import Head from 'next/head'
import { Container, useMediaQuery, useTheme } from '@material-ui/core'
import { AccueilProduit } from 'components/Produits/AccueilProduit'
import { DecouvertePsio } from 'components/Produits/Psio/DecouvertePsio'
import { PlusInfo } from 'components/Produits/Psio/PlusInfo'
import { BanniereInfo } from 'components/BanniereInfo'
import { BulleInfo } from 'components/BulleInfo'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

export default function Psio() {
  const ref = React.useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
          titre="La luminothérapie"
          description="La luminothérapie consiste à s&apos;exposer face à une lampe reproduisant la lumière naturelle du soleil. L&apos;exposition à la lumière aide à lutter contre la sécrétion de mélatonine, une hormone responsable de notre endormissement. 
          En hiver, les jours sont plus courts et la luminosité est réduite. Notre organisme sécrète donc plus de mélatonine qui se traduit par une baisse de vitalité pouvant entraîner une dépression saisonnière.<>
          Les lunettes Psio combine les bienfaits de la luminothérapie avec de la musique ou de la relaxation par la voix. A la maison, au bureau, dans la voiture sur le bord d’une aire de repos ou encore dans l’avion, ce dispositif facilement transportable permet de se plonger instantanément dans un état de bien-être en
          profitant d’une récupération intense.
          L&apos;utilisation du PSiO prouve son efficacité depuis plusieurs années en agissant sur de nombreuses
          problématiques."
          photo="/picto/info.png"
          /* photoSize="100%"
          photoHeight="18rem"
          photoWidth="16rem" */
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            padding: '1rem 0 3rem 0',
          }}
        >
          <BulleInfo titre="Gestion des émotions" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Gestion_emotions.png" photoSize="50%" />
          <BulleInfo titre="Fatigue" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Fatigue.png" photoSize="60%" />
          <BulleInfo titre="Stress" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Stress.png" photoSize="65%" />
          <BulleInfo titre="Dépression" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Depression.png" photoSize="50%"/>
          <BulleInfo titre="Addiction" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Addiction.png" photoSize="60%" />
          <BulleInfo titre="Mémoire" size={isMobile ? "5rem" : "7rem"} photoUrl="/picto/Apprentissage.png" photoSize="60%" />
        </div>
      </Container>
      <DecouvertePsio />
      <Container>
        <PlusInfo />
      </Container>
      {/* <AchatPsio /> */}
      <Footer />
    </div>
  )
}
