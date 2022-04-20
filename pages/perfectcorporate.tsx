import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import Lottie from 'react-lottie'
import { Navigation } from 'components/Navigation'
import animation from 'assets/logo404.json'
import { TitleBar } from 'components/TitleBar'
import { Footer } from 'components/Footer'

export default function Perfectcorporate() {
  const ref = React.useRef<HTMLDivElement>(null)

  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  }

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCorporate</title>
      </Head>
      <Navigation displayLogo={false} />
      <Container
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <div
            style={{
              margin: '0 auto',
              width: '35%',
            }}
          >
            <Lottie options={bodymovinOptions} style={{ margin: '1rem' }} />
          </div>
        </div>
        <TitleBar title="Page en cours de construction" color="vert" />
      </Container>
      <Footer />
    </div>
  )
}
