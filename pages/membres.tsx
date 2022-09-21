import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { WelcomeMembrePerfect } from 'components/MembrePerfect/WelcomeMembrePerfect'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { TitleBar } from 'components/TitleBar'
import { Coach } from 'components/MembrePerfect/Coach'
import { dataCoachs } from 'modules/data'

export default function Membres() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Head>
        <title>Nos membres</title>
      </Head>
      <Navigation />

      <WelcomeMembrePerfect />

      <Container>
        <TitleBar title="Nos praticiens" color="vert" padding="2rem 0 2rem 0" />
      </Container>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1rem 10vw',
          alignContent: 'flex-start',
          justifyContent: 'space-evenly',
        }}
      >
        {dataCoachs.map((coach, i) => (
          <Coach user={coach} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
