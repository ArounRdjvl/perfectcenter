import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TitleBar } from '../components/TitleBar'
import { Product } from '../components/Product'
import { dataProducts } from '../modules/data'

export default function Perfectcare() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCare</title>
      </Head>
      <Navigation />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1rem 2vw',
          alignContent: 'flex-start',
          justifyContent: 'space-evenly',
        }}
      >
        <Container>
          <TitleBar title="Nos produits" color="vert" padding="0 0 2rem 0" />
        </Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
          }}
        >
          {dataProducts.map((product) => <Product product={product} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}
