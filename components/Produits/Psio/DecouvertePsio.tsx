import React from 'react'
import { Typography, useTheme, useMediaQuery, Container, Link, Button} from '@material-ui/core'
import { colors } from 'modules/theme'
import { Divider } from 'components/Divider'

export function DecouvertePsio() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div 
      style={{
        width: '100%',
        backgroundColor: colors.vert,
        padding:'1rem',
        marginBottom: '3rem'
      }}
    >
      <Container>
        <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              marginTop: '2rem'
            }}
          >
            <Typography variant="h2" align="center" color="textSecondary">
              Envie d&apos;une pause relaxation ?
            </Typography>
            <Divider color="beige" width='10rem'/>
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: isMobile ? 'column' : 'row'
            }}
          >
             <div
              style={{
                width: isMobile ? '100%' : '40%',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop : isMobile ? '2rem' : '0rem'
              }}
            >
            <div
              style={{
                position: 'relative',
                width: '20rem',
                height: '15rem',
                display: 'flex',
                borderRadius: '15%',
                margin: 'auto',
                backgroundColor: theme.palette.secondary.main,
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(/photos/LitPsio.png)',
                backgroundPosition: 'center'
              }}
            />
            </div>
            <div
              style={{
                width: isMobile ? '100%' : '60%',
                height: isMobile ? '13rem' : '15rem',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: isMobile ? '0rem' : '3.5rem'
              }}
            >
              <Typography variant="h4" align="center" color="textSecondary" style={{marginTop: isMobile ? '2rem' : '0'}}>
                Venez essayer le Psio chez PerfectCenter<br/>en profitant de notre séance découverte gratuite !
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
                <Link href="/contact" underline="none" style={{ marginBottom: '2rem' }}>
                  <Button variant="contained" color="primary" size="large">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      </Container>
    </div>
  )
}