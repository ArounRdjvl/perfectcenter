import React from 'react'
import Head from 'next/head'
import {
  Container,
} from '@material-ui/core'
import { WelcomePerfectCircle } from 'components/PerfectCircle/WelcomePerfectCircle'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TitleBar } from '../components/TitleBar'
import { Coach } from '../components/PerfectCircle/Coach'
import { dataCoachs } from '../modules/data'


export default function Perfectcircle() {

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCircle</title>
      </Head>
      <Navigation />

      <WelcomePerfectCircle />

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
        {dataCoachs.map((coach, i) => <Coach user={coach} />)}
      </div>
      <Footer />
    </div>
  )
}
