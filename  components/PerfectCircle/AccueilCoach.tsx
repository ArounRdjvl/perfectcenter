import { Container, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { Divider } from '../Divider'
import { colors } from '../../modules/theme'
import { TitleBar } from ' components/TitleBar'

const useStyles = makeStyles((theme) => {
  return {
    img: {
      position: 'absolute',
      left: 0,
      height: '10rem',
      width: '10rem',
    },
  }
})

export interface AccueilCoachProps {
  titre: string
  photo: string
  pratique: string
  description: string
}

export function AccueilCoach(props: AccueilCoachProps) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
        <TitleBar
          title={props.titre}
          background={true}
          color="vert"
          padding="2rem 0 0 0"
          paddingMobile="1rem 0 0 5vw"
        />
        <Grid
          justify="center"
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
                height: '15rem',
                width: '15rem',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${props.photo})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                borderRadius: '40px',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            ></div>
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
              margin: '1rem 0',
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
              }}
            >
              <Typography variant="h3" align="center">
                {props.pratique}
              </Typography>
            </div>
            <div
              style={{
                padding: '1rem 10vw',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Typography variant="body2" align="justify">
                {props.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
  return (
    <>
      <Container>
        <TitleBar title={props.titre} background={true} color="vert" padding="2rem 0 0 0" />
        <Grid justify="flex-end" container style={{ margin: '3rem 0' }}>
          <Grid
            xs={4}
            style={{
              position: 'relative',
              zIndex: 3,
            }}
            item
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                paddingRight: '0.8rem',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${props.photo})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                position: 'absolute',
                height: '25vw',
                maxHeight: '25rem',
                minHeight: '16rem',
                width: '100%',
                right: 0,
                borderRadius: '40px',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            ></div>
          </Grid>
          <Grid
            xs={8}
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
                borderRadius: '0 30px 30px 0',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            >
              <Typography variant="h2" align="left" style={{ marginLeft: '4vw' }}>
                {props.pratique}
              </Typography>
            </div>
            <div
              style={{
                padding: '1rem 5rem',
                position: 'relative',
                minHeight: '15rem',
                zIndex: 2,
              }}
            >
              <Typography
                variant="body1"
                align="justify"
                style={{ marginTop: '2rem', whiteSpace: 'pre-line' }}
              >
                {props.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
