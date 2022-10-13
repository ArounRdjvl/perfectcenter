import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, makeStyles } from '@material-ui/core'
import { colors } from 'modules/theme'
import { BulleInfo } from 'components/BulleInfo'

export interface ImageAndDescriptionProps {
  position: "left"|"right" 
  titre: string
  description: string
  photo: string
}

export function ImageAndDescription(props: ImageAndDescriptionProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const getContenu = (   ()=> {
    if (props.position === "left") {
      return (
        <Grid
        justifyContent={isMobile ? "center" : "flex-end"}
        direction={isMobile ? "column" : "row"}
        container
        style={{ marginTop: '2rem' }}>
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
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          item
        >
          <BulleInfo size={isMobile ? "7rem" : "10rem"} photoUrl={props.photo} photoSize="50%" />
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
              paddingTop: '2rem',
              minHeight: '15rem',
            }}
          item
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center',
              width: isMobile ? '90%' : '100%',
              right: isMobile ? '' : 0,
              top: 0,
              padding: isMobile ? '0.5rem 1rem' : '0.7rem',
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h3"}
              align={isMobile ? "center" : "left"}
              style={isMobile ? {} : { marginLeft: '5vw' }}>
              {props.titre}
            </Typography>
          </div>
          <div
            style={{
              padding: isMobile ? '1rem 10vw' : '0rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography
              variant={isMobile ? "body2" : "body1"}
              align="justify"
              style={isMobile ? { marginBottom: '16px' } : { margin: '1rem 5rem 1rem 1rem' }}>
              {props.description}
            </Typography>
          </div>
        </Grid>
      </Grid >
      )
    }
    if (props.position === "right") {
      return (
        <Grid
        justifyContent={isMobile ? "center" : "flex-end"}
        direction={isMobile ? "column" : "row"}
        container
        style={{ marginTop: '2rem' }}>
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
              paddingTop: '2rem',
              minHeight: '15rem',
            }}
          item
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center',
              width: isMobile ? '90%' : '100%',
              right: isMobile ? '' : 0,
              top: 0,
              padding: isMobile ? '0.5rem 1rem' : '0.7rem',
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h3"}
              align={isMobile ? "center" : "left"}
              style={isMobile ? {} : { marginLeft: '5vw' }}>
              {props.titre}
            </Typography>
          </div>
          <div
            style={{
              padding: isMobile ? '1rem 10vw' : '0rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography
              variant={isMobile ? "body2" : "body1"}
              align="justify"
              style={isMobile ? { marginBottom: '16px' } : { margin: '1rem 1rem 1rem 4rem' }}>
              {props.description}
            </Typography>
          </div>
        </Grid>
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
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          item
        >
          <BulleInfo size={isMobile ? "7rem" : "10rem"} photoUrl={props.photo} photoSize="50%" />
        </Grid>
      </Grid >
      )
    }
    return null
    }
  )
  return (
    <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
        }}
    >
        {getContenu()}
    </div>
    )
}