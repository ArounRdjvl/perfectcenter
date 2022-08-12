import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { WelcomePerfectCircle } from 'components/PerfectCircle/WelcomePerfectCircle'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { Coach } from 'components/PerfectCircle/Coach'
import { dataCoachs } from 'modules/data'

export default function Perfectcircle() {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCircle</title>
      </Head>
      <Navigation />
      <Container>
        <WelcomePerfectCircle />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
            marginBottom: '3rem'
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
