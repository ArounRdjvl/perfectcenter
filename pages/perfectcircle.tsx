import React from 'react'
import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import { Container, ThemeProvider, useTheme } from '@mui/material'
import { Footer } from '../components/Footer'
import { TitleBar } from '../components/TitleBar'
import { Coach } from '../components/PerfectCircle/Coach'
import { dataCoachs } from '../modules/data'
import { WelcomePerfectCircle } from 'components/PerfectCircle/WelcomePerfectCircle'

export default function perfectcircle() {
  const theme = useTheme()

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <ThemeProvider theme={theme}>
      <div ref={ref}>
        {/* <Background elRef={ref} /> */}

        <Head>
          <title>PerfectCircle</title>
        </Head>
        <Navigation />

        <WelcomePerfectCircle />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem 10vw',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
          }}
        >
          <TitleBar title="Nos praticiens" color="vert" padding="0 0 2rem 0" />
          {dataCoachs.map((coach, i) => {
            const pair = i % 2 == 0
            return <Coach pair={pair} user={coach} />
          })}
        </div>
        <Container>
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  )
}
