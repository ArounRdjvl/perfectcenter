import React from 'react'
import Head from 'next/head'
import { Container, Typography } from '@material-ui/core'
import { AccueilProduit } from 'components/Produits/AccueilProduit'
import { AchatPsio } from 'components/Produits/Psio/AchatPsio'
import { BanniereInfo } from 'components/BanniereInfo'
import { BulleInfo } from 'components/BulleInfo'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { InfoMinte } from 'components/Produits/Mint-e/InfoMinte'

export default function Minte() {
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
        />
      <InfoMinte />  
      </Container>
      <Footer />
    </div>
  )
}
