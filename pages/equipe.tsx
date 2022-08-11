import React from 'react'
import Head from 'next/head'
import { Navigation } from 'components/Navigation'
import { Equipe } from 'components/Equipe'
import { Container } from '@material-ui/core'
import { Footer } from 'components/Footer'
import { TitleBar } from 'components/TitleBar'
import { dataMembres } from 'modules/data'

export default function Membres() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      {/* <Background elRef={ref} /> */}

      <Head>
        <title>Notre Equipe</title>
      </Head>
      <Navigation />
      <Container>
        <TitleBar title="Notre Equipe" color="vert" />
        {dataMembres.map((member, i) => {
          const pair = i % 2 === 0
          return <Equipe pair={pair} user={member} key={i} />
        })}
      </Container>
      <Footer />
    </div>
  )
}
