import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, makeStyles } from '@material-ui/core'
import { colors } from 'modules/theme'

const useStyles = makeStyles(() => ({
  img: {
    position: 'relative',
    width: '8rem',
    height: '8rem',
    borderRadius: '50%',
  },
  img_phone: {
    position: 'relative',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
  },
}))

export interface BanniereProps {
  titre: string
  description: string
  photo: string
  /* photoSize: string
  photoWidth: string
  photoHeight: string */
}

export function BanniereInfo(props: BanniereProps) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
      <Grid
        justifyContent={isMobile ? "center" : "flex-end"}
        direction={isMobile ? "column" : "row"}
        container
        style={isMobile ? { marginTop: '2rem' } : { margin: '4rem 0 0 0' }}>
        <Grid
          xs={isMobile ? 12 : 3}
          style={isMobile ?
            {
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
            :
            {
              position: 'relative',
              zIndex: 3
            }}
          item
        >
          <div
            style={{
              position: isMobile ? 'relative' : 'absolute',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.vert,
              height: isMobile ? '8rem' : '12rem',
              width: isMobile ? '8rem' : '12rem',
              left: isMobile ? 0 : '',
              right: isMobile ? '' : 0,
              borderRadius: isMobile ? '30px' : '40px',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <img src={props.photo} alt={props.titre} width={isMobile ? "55%" : "60%"} />
          </div>
        </Grid>
        <Grid
          xs={isMobile ? 12 : 9}
          style={isMobile ?
            {
              position: 'relative',
              minWidth: '16rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0.5rem 0',
            }
            :
            {
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
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center',
              width: isMobile ? '90%' : '100%',
              right: isMobile ? '' : 0,
              top: 0,
              padding: isMobile ? '0.5rem 1rem' : '0.7rem',
              borderRadius: isMobile ? '25px' : '0 30px 30px 0',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h2"}
              align={isMobile ? "center" : "left"}
              style={isMobile ? {} : { marginLeft: '5vw' }}>
              {props.titre}
            </Typography>
          </div>
          <div
            style={{
              padding: isMobile ? '1rem 10vw' : '1rem 5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography
              variant={isMobile ? "body2" : "body1"}
              align="justify"
              style={isMobile ? { marginBottom: '16px' } : { margin: '2rem 0' }}>
              {props.description}
            </Typography>
          </div>
        </Grid>
      </Grid >
    )
}
