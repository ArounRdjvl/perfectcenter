import React from 'react'
import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import { AnimatedLogo } from '../components/index/animation/AnimatedLogo'
import { Animations } from '../components/index/animation/Animations'
import { Container, IconButton } from '@mui/material'
import { Footer } from '../components/Footer'
import { Services } from '../components/index/Services'
import { Valeurs } from '../components/index/Valeurs'
import { Newsletter } from 'components/index/Newsletter'
import { Link, animateScroll as scroll } from 'react-scroll'
import { DecouvertePraticiens } from 'components/index/DecouvertePraticiens'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function index() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navigation displayLogo={false} />

      <Animations />

      <AnimatedLogo delay={600} />

      <div style={{ height: '100vh' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-9.5rem',
          marginBottom: '5rem',
        }}
      >
        <Link
          activeClass="active"
          to="container"
          spy={true}
          smooth={true}
          offset={-120}
          duration={1500}
        >
          <IconButton
            color="primary"
            sx={{
              position: 'relative',
              zIndex: 3,
            }}
          >
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <div id="container" />
      <Valeurs />
      <Container>
        <Services />
      </Container>
      <DecouvertePraticiens />
      <Container>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  )
}
