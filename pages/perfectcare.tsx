import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { WelcomeProduits } from 'components/PerfectCare/WelcomeProduits'
import { Product } from 'components/Product'
import { dataProducts } from 'modules/data'

export default function Perfectcare() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCare</title>
      </Head>
      <Navigation />
      <Container>
        <WelcomeProduits />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem 2vw',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
          }}
          >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              alignContent: 'flex-start',
              justifyContent: 'space-evenly',
              margin: '1rem 0 5rem',
            }}
            >
            {dataProducts.map((product, i) => (
              <Product product={product} key={i} />
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
