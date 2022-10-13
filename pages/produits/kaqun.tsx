import React from 'react'
import Head from 'next/head'
import { Container, makeStyles, Typography, useTheme } from '@material-ui/core'
import { AccueilProduit } from 'components/Produits/AccueilProduit'
import { LumiereMusique } from 'components/Produits/Psio/LumiereMusique'
import { AchatPsio } from 'components/Produits/Psio/AchatPsio'
import { BanniereInfo } from 'components/BanniereInfo'
import { BulleInfo } from 'components/BulleInfo'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'
import { Product } from 'components/Product'
import { InfoKaqun } from 'components/Produits/Kaqun/InfoKaqun'

const useStyles = makeStyles(() => ({
  produit: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    margin: '1rem 0 5rem',
  }
}))

export default function Kaqun() {
  const ref = React.useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const classes = useStyles(theme)
  const Kaqun = [
    {
      name: '1 bouteille Kaqun',
      linkPhoto: '/produits/1 bouteille Kaqun.png',
      prix: '5€',
      link: 'https://perfectcenter-reservations.fr/produit/bouteille-deau-kaqun/'
    },
    {
      name: 'Pack 6 bouteilles Kaqun',
      linkPhoto: '/produits/KAQUN.png',
      prix: '25€',
      link: 'https://perfectcenter-reservations.fr/produit/bouteille-deau-kaqun/'
    }]
    const Kaqun2 = [
      {
        name: '1 pack de 6 bouteilles Kaqun',
        linkPhoto: '/produits/KAQUN.png',
        prix: '35€',
        link: 'https://flow2u.eu/produit/pack-kaqun/'
      },
      {
        name: '2 packs de 6 bouteilles Kaqun',
        linkPhoto: '/produits/KAQUN.png',
        prix: '60€',
        link: 'https://flow2u.eu/produit/pack-kaqun/'
      },
      {
        name: '3 packs de 6 bouteilles Kaqun',
        linkPhoto: '/produits/KAQUN.png',
        prix: '80€',
        link: 'https://flow2u.eu/produit/pack-kaqun/'
      }]
  return (
    <div ref={ref}>
      <Head>
        <title>Kaqun</title>
      </Head>
      <Navigation />
      <AccueilProduit title="Kaqun" path="/produits/Kaqun.png" />
      <div style={{ height: '95vh' }} />
      <Container>
      <BanniereInfo
        titre='Une eau oxygénée'
        description="
        L&apos;oxygène est indéniablement l&apos;un des éléments les plus importants pour chaque cellule de notre corps. Sans elle, nos cellules ne peuvent produire beaucoup d&apos;énergie et 
        leur métabolisme devient moins efficace. En biologie cellulaire, le prix Nobel de médecine et de biologie, Otto Heinrich Warburg, a découvert qu&apos;aucune maladie ne peut 
        survivre en présence de niveaux élevés d&apos;oxygène.
        En 2002, le docteur Robert LYONS s&apos;est fixé pour objectif de créer un produit capable de stocker et de transporter l&apos;oxygène sous une forme complètement révolutionnaire. 
        C&apos;est avec cette idée que la première eau oxygénée à vu le jour.
        La technologie révolutionnaire derrière l&apos;eau KAQUN® permet à un niveau élevé d&apos;oxygène d&apos;exister sous une forme unique, stable et liée qui favorise une absorption rapide dans le corps.
        La consommation régulière d&apos;eau KAQUN améliore la qualité de vie et aide le système immunitaire à fonctionner, détoxifie, rafraîchit et dynamise. De plus, il aide à la performance physique 
        et mentale et à la régénération.
        "
        photo="/picto/info.png"
      />
      <div
        style={{
          width: '100%',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" align="center">
          Faites vous livrer votre eau Kaqun®
        </Typography>
        <Typography variant="body1" align="center" style={{marginTop: '2rem'}}>
          Il est maintenant possible de vous faire livrer votre pack d&apos;eau chez vous ! (Frais de livraison inclus)
        </Typography>
        <div className={classes.produit}>
            {Kaqun2.map((product, i) => (
              <Product product={product} key={i} />
              ))}
        </div>
      </div>
      <InfoKaqun />
      <div
        style={{
          width: '100%',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" align="center">
          Click&Collect chez PerfectCenter
        </Typography>
        <Typography variant="body1" align="center" style={{marginTop: '2rem'}}>
          Economisez les frais de livraison en venant directement chercher votre eau Kaqun chez PerfectCenter.
        </Typography>
        <div className={classes.produit}> 
            {Kaqun.map((product, i) => (
              <Product product={product} key={i} />
              ))}
        </div>
      </div>
      </Container>
      <Footer />
    </div>
  )
}
