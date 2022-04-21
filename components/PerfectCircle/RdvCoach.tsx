import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import { colors } from 'modules/theme'
import { Prestation } from './Prestation'

export function RdvCoach() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <div
        className="root"
        style={{
          backgroundColor: colors.vert,
          padding: '1rem 0 2rem 0',
        }}
      >
        <div
          style={{
            width: '100%',
            margin: '1rem 0 ',
          }}
        >
          <Typography variant="h2" align="center" color="textSecondary">
            Les prestations
          </Typography>
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Prestation titre="Prestation 1" prix="50€" />
            <Prestation titre="Prestation 2" prix="50€" />
            <Prestation titre="Prestation 3" prix="50€" />
            <Prestation titre="Prestation 4" prix="50€" />
            <Prestation titre="Prestation 5" prix="50€" />
            <Prestation titre="Prestation 6" prix="50€" />
          </div>
          <div
            style={{
              width: '30vw',
              minWidth: '12rem',
              display: 'flex',
              flexDirection: 'column',
              margin: '2rem 0 0 0',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: '100%', padding: '1rem' }}
            >
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className="root"
      style={{
        backgroundColor: colors.vert,
        padding: '1rem 0 4rem 0',
      }}
    >
      <div
        style={{
          width: '100%',
          margin: '2.5rem 0 ',
        }}
      >
        <Typography variant="h2" align="center" color="textSecondary">
          Les prestations
        </Typography>
      </div>
      <Container>
        <Grid container>
          <Grid
            xs={8}
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            item
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Prestation titre="Ecoute active" duree="1h30" prix="75€" />
              <Prestation
                titre="Consultation classique (temps d’échange verbal + pratique thérapeutique)"
                duree="1h30"
                prix="75€"
              />
              <Prestation
                titre="Massage nourrissant (massage + bulle de sérénité)"
                duree="1h"
                prix="50€"
              />
              <Prestation
                titre="Sortir des relations pourries. Une renaissance en 9 séances."
                duree="9x1h30"
                prix="999€"
              />
              <Prestation
                titre=" Cercle de paroles au masculin pour se soutenir dans les rechutes et les réussites"
                duree="2h"
                prix="20€"
              />
            </div>
          </Grid>
          <Grid
            xs={4}
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: '50%', padding: '1rem' }}
            >
              Prendre Rendez-vous
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
