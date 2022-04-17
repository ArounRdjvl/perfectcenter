import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
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

export function WelcomeMsg() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const paragrapheErik =
    "Avant d'être un centre de bien-être, j'ai souhaité que cet endroit soit un lieu d'échanges et de partages. <br/>Le cabaret historique \"le Bœuf sur le toit\" était le point de rendez-vous de tout Paris mais il était aussi un incubateur de talents. Il permettait notamment à des artistes sans le sou de pouvoir s'exprimer et se lancer.<br/>J'ai donc décidé de prolonger l'histoire en créant un centre avec des prestations haut de gamme et composé de personnes partageant les mêmes valeurs de générosité et de bienveillance.<br/>"
  if (isMobile) {
    return (
      <>
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <TitleBar
            title="Bienvenue chez PerfectCenter"
            background={true}
            color="vert"
            paddingMobile="0 0 0 0rem"
            justifyContent="center"
          />
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: '2rem',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              position: 'relative',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: '20px 20px 0 0',
              height: '8rem',
              width: '9rem',
              backgroundImage: 'url(/erik.png)',
              backgroundPosition: 'center',
              backgroundSize: '100%',
            }}
          ></div>
          <div
            style={{
              backgroundColor: colors.beige,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              borderRadius: '30px',
              padding: '0.5rem 0.5rem',
              top: 0,
            }}
          >
            <Typography variant="h4" align="center">
              Erik HENRION
              <br />- Fondateur de PerfectCenter -
            </Typography>
          </div>
          <div
            style={{
              padding: '1rem 12vw',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="body1" align="justify">
              {paragrapheErik}
            </Typography>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <TitleBar
        title="Bienvenue chez PerfectCenter"
        background={true}
        color="vert"
        paddingMobile="0 0 0 5vw"
      />
      <div
        style={{
          position: 'absolute',
          width: '56vw',
          height: '50vh',
          display: 'flex',
          marginTop: '1rem',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              backgroundColor: colors.beige,
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: '3vw',
              marginTop: '1rem',
              alignItems: 'center',
              height: '3rem',
              width: '100%',
              borderRadius: '25px',
              top: 0,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              style={{ fontStyle: 'italic' }}
            >
              Erik HENRION - Fondateur de PerfectCenter
            </Typography>
          </div>
          <div
            style={{
              position: 'absolute',
              width: '13vw',
              height: '13vw',
              maxHeight: '13rem',
              maxWidth: '13rem',
              right: 0,
              backgroundColor: colors.noir,
              borderRadius: '20px',
              backgroundImage: 'url(/erik.png)',
              backgroundPosition: 'center',
              backgroundSize: '100%',
            }}
          ></div>
        </div>
        <div
          style={{
            position: 'relative',
            width: '42vw',
            padding: ' 1rem 3rem 0 4vw',
          }}
        >
          <Typography variant="body1" align="justify">
            {paragrapheErik}
          </Typography>
        </div>
      </div>
    </>
  )
}
