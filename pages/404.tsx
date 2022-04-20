import React from 'react'
import { Button, Container, Link, Typography } from '@material-ui/core'
import Lottie from 'react-lottie'
import animation from '../assets/logo404.json'

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null)

  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  }

  return (
    <Container ref={ref} style={{ display: 'flex', height: '100vh' }}>

      <div
        style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 200,
          }}
        >
          <Lottie options={bodymovinOptions} style={{ margin: 'auto' }} />
        </div>
        <Typography align="center" variant="h1">
          Error 404 : Stay Calm, Everything&apos;s good.
        </Typography>

        <Link href="/" underline="none" style={{ marginTop: '1rem' }}>
          <Button variant="contained" color="secondary" size="large">
            Accueil
          </Button>
        </Link>
      </div>
    </Container>
  )
}
