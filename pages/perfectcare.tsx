import React from 'react'
import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import { Container } from '@mui/material'
import { Footer } from '../components/Footer'
import { TitleBar } from '../components/TitleBar'
import { Product } from '../components/Product'
import { dataProducts } from '../modules/data'

export default function perfectcare() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      {/* <Background elRef={ref} /> */}

      <Head>
        <title>PerfectCare</title>
      </Head>
      <Navigation />
      <Container>
        <TitleBar title="Nos produits" background={true} color="vert" />
        {dataProducts.map((product, i) => {
          const pair = i % 2 == 0
          return <Product pair={pair} product={product} />
        })}
        <Footer />
      </Container>
    </div>
  )
}
