import React from 'react'
import Head from 'next/head'
import { Container, useMediaQuery, useTheme } from '@material-ui/core'
import { WelcomeMembrePerfect } from 'components/MembrePerfect/WelcomeMembrePerfect'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { TitleBar } from 'components/TitleBar'
import { Coach } from 'components/MembrePerfect/Coach'
import { dataCoachs } from 'modules/data'

export default function Membres() {
  const theme = useTheme()
  const ref = React.useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div ref={ref}>
      <Head>
        <title>Nos membres</title>
      </Head>
      <Navigation />

      <Container>
        <WelcomeMembrePerfect />
        <TitleBar title="Nos praticiens" color="vert" padding="2rem 0 2rem 0" />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: isMobile ? '0.5rem' : '1rem 5vw',
              alignContent: 'flex-start',
              justifyContent: 'space-evenly',
            }}
            >
            {dataCoachs.map((coach, i) => (
              <Coach user={coach} key={i} />
              ))}
          </div>
        </Container>
      <Footer />
    </div>
  )
}
