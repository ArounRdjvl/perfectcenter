import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, Link, Button } from '@material-ui/core'
import { colors } from 'modules/theme'

export function FormationsIndex() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <Grid
        justifyContent="center"
        direction="column"
        container
        style={{
          marginTop: '2rem',
        }}
      >
        <Grid
          xs={12}
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.vert,
              height: '12rem',
              width: '12rem',
              left: 0,
              borderRadius: '40px',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <img src="picto/Malette.png" width="55%" alt="malette" />
          </div>
        </Grid>
        <Grid
          xs={12}
          style={{
            position: 'relative',
            minWidth: '16rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0.5rem 0',
          }}
          item
        >
          <div
            style={{
              backgroundColor: colors.beige,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              borderRadius: '25px',
              top: 0,
              padding: '0.5rem 1rem',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <Typography variant="h3" align="center">
              Nos formations
            </Typography>
          </div>
          <div
            style={{
              padding: '1rem 10vw',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="body1" align="justify">
              PerfectCenter est également un organisme de formation validé Qualiopi vous proposant des formations de qualités sur différentes thématiques.
              Nous faisons intervenir dans nos formations certains de nos praticiens qualifiés pour vous transmettre leur savoir !
              Vous êtes une entreprise ? Nous pouvons créer une formation faites sur mesure en se basant sur l&apos;analyse de vos besoins et de vos demandes.
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/formations" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large">
                Nos formations
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid justifyContent="flex-end" container style={{ margin: "4rem 0" }}>
      <Grid
        xs={9}
        style={{
          position: 'relative',
          paddingTop: '3rem',
          minHeight: '15rem',
        }}
        item
      >
        <div
          style={{
            backgroundColor: colors.beige,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            right: 0,
            top: 0,
            padding: '0.7rem',
            borderRadius: '30px 0 0 30px ',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <Typography variant="h2" align="left" style={{ marginLeft: '5vw' }}>
            Nos formations
          </Typography>
        </div>
        <div
          style={{
            padding: '1rem 5rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography variant="body1" align="justify" style={{ margin: '2rem 0' }}>
            PerfectCenter est également un organisme de formation en cours de validation Qualiopi vous proposant des formations de qualités sur différentes thématiques.
            Nous faisons intervenir dans nos formations certains de nos praticiens qualifiés pour vous transmettre leur savoir !
            Vous êtes une entreprise ? Nous pouvons créer une formation faites sur mesure en se basant sur l&apos;analyse de vos besoins et de vos demandes.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/formations" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large" style={{ width: '100%', fontSize: '20px', marginBottom: '1rem' }}>
                Nos formations
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid
        xs={3}
        style={{
          position: 'relative',
          zIndex: 3,
        }}
        item
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.vert,
            height: '15vw',
            width: '15vw',
            maxHeight: '15rem',
            minHeight: '12rem',
            maxWidth: '15rem',
            minWidth: '12rem',
            left: 0,
            borderRadius: '40px',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <img src="picto/Malette.png" width="60%" alt="malette" />
        </div>
      </Grid>
    </Grid>
  )
}
