import { Typography, Grid, useTheme, useMediaQuery, makeStyles, Container } from '@material-ui/core'
import React from 'react'
import { colors } from 'modules/theme'
import { Divider } from './Divider'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: '12rem',
    backgroundColor: colors.beige,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inside: {
    position: 'relative',
    width: '33.3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '1rem 2rem',
  },
  rootPhone: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: '20rem',
    backgroundColor: colors.beige,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1rem 1rem',
  },
}))

export interface FooterProps {
  margin?: string
  marginPhone?: string
}

export function Footer(props: FooterProps) {
  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <div
        className={classes.rootPhone}
        style={{ margin: props.marginPhone ? props.marginPhone : '0 0 0 0' }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h1" align="center">
            PerfectCenter
          </Typography>
          <Divider color="vert" />
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <a href="https://www.google.com/maps/place/Perfectcenter/@48.8714395,2.3082491,17z/data=!3m1!4b1!4m5!3m4!1s0x47e8823b9b9a9b19:0x4e5130e5e04510fa!8m2!3d48.871436!4d2.3104378">
            <Typography align="center" style={{ fontWeight: 'bold', margin: '0.5rem' }}>
              34 rue du colisée, 75008, Paris
            </Typography>
          </a>
          <a href="tel:+33 1 40 76 06 58">
            <Typography align="center" style={{ fontWeight: 'bold', margin: '0.5rem' }}>
              +33 1 40 76 06 58
            </Typography>
          </a>
          <a href="mailto:contact@perfectcenter.fr">
            <Typography align="center" style={{ fontWeight: 'bold', margin: '0.5rem' }}>
              Contact@perfectcenter.fr
            </Typography>
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a href="https://www.facebook.com/PerfectCenterParis" target="_blank" rel="noreferrer">
            <img
              src="/picto/Facebook_fonce.png"
              alt="Facebook_logo"
              width={55}
              style={{ margin: theme.spacing(1) }}
            />
          </a>
          <a
            href="https://www.instagram.com/perfectcenter_/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/picto/Instagram_fonce.png"
              alt="Instagram_logo"
              width={55}
              style={{ margin: theme.spacing(1) }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/perfectcenter/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/picto/Linkedin_fonce.png"
              alt="Linkedin_logo"
              width={55}
              style={{ margin: theme.spacing(1) }}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvcusrvzAdqfjT5ICXXNe-g"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/picto/YT_Fonce.png"
              alt="Youtube_logo"
              width={55}
              style={{ margin: theme.spacing(1) }}
            />
          </a>
        </div>

        <div style={{ position: 'absolute', bottom: 0 }}>
          <Typography style={{ fontSize: '12px', marginRight: '0.5rem' }}>
            Copyright © 2022 perfectcenter.fr® All rights reserved
          </Typography>
        </div>
      </div>
    )
  }
  return (
    <div className={classes.root} style={{ margin: props.margin ? props.margin : '0 0 0 0' }}>
      <Container className={classes.root}>
        <div className={classes.inside}>
          <div style={{ marginLeft: '3vw' }}>
            <a href="https://www.google.com/maps/place/Perfectcenter/@48.8714395,2.3082491,17z/data=!3m1!4b1!4m5!3m4!1s0x47e8823b9b9a9b19:0x4e5130e5e04510fa!8m2!3d48.871436!4d2.3104378">
              <Typography style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                34 rue du colisée, 75008, Paris
              </Typography>
            </a>
            <a href="tel:+33 1 40 76 06 58">
              <Typography style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                +33 1 40 76 06 58
              </Typography>
            </a>
            <a href="mailto:contact@perfectcenter.fr">
              <Typography style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                Contact@perfectcenter.fr
              </Typography>
            </a>
          </div>
        </div>
        <div className={classes.inside}>
          <Typography variant="h1" align="center">
            PerfectCenter
          </Typography>
          <Divider color="vert" />
        </div>
        <Grid className={classes.inside}>
          <div
            style={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <a href="https://www.facebook.com/PerfectCenterParis" target="_blank" rel="noreferrer">
              <img
                src="/picto/Facebook_fonce.png"
                alt="Facebook_logo"
                width={55}
                style={{ margin: theme.spacing(1) }}
              />
            </a>
            <a
              href="https://www.instagram.com/perfectcenter_/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/picto/Instagram_fonce.png"
                alt="Instagram_logo"
                width={55}
                style={{ margin: theme.spacing(1) }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/perfectcenter/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/picto/Linkedin_fonce.png"
                alt="Linkedin_logo"
                width={55}
                style={{ margin: theme.spacing(1) }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvcusrvzAdqfjT5ICXXNe-g"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Youtube_logo"
                src="/picto/YT_Fonce.png"
                width={55}
                style={{ margin: theme.spacing(1) }}
              />
            </a>
          </div>
        </Grid>
      </Container>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Typography style={{ fontSize: '15px', marginRight: '2rem' }}>
          Copyright © 2022 perfectcenter.fr® All rights reserved
        </Typography>
      </div>
    </div>
  )
}
