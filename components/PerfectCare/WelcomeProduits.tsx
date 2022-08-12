import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { colors } from 'modules/theme'

const useStyles = makeStyles(() => ({
  img: {
    position: 'relative',
    left: 0,
    height: '8rem',
    width: '8rem',
  },
  bulle: {
    position: 'absolute',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 25px #BBBBBB',
  },
  img_phone: {
    position: 'relative',
    width: '6.5rem',
    height: '6.5rem',
    borderRadius: '50%',
  },
}))

export function WelcomeProduits() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            float: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1.5rem 3rem 1.5rem',
          }}
        >
          <TitleBar title="Nos produits" color="vert" padding= "0 0 3rem 0" justifyContent= "center" paddingMobile="2rem 0 2rem 5vw" />
          <Typography variant="body1" align="justify">
            Depuis plus de 14 ans, Erik HENRION n&apos;a cessé de chercher des produits 
            qui se démarquent par leur innovation et leur efficacité.<br />
            Dans PerfectCare, nous vous proposons toute une gamme de produit allant des lunettes de
            luminothérapie, en passant par les fleurs de bach et des compléments alimentaires. Ces
            produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous
            invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par
            télephone.
          </Typography>
        </div>
    )
  }
  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
          borderRadius: '30px',
          top: 0,
        }}
       />
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '30rem',
          height: '89vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50%',
            height: '100%',
            float: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1.5rem 3rem 1.5rem',
          }}
        >
          <TitleBar title="Nos produits" color="vert" padding= "0 0 3rem 0" paddingMobile="2rem 0 0 5vw" />
          <Typography variant="body1" align="justify">
            Depuis plus de 14 ans, Erik HENRION n&apos;a cessé de chercher des produits 
            qui se démarquent par leur innovation et leur{' '}
            efficacité.<br />
            Dans PerfectCare, nous vous proposons toute une gamme de produit allant des lunettes de
            luminothérapie, en passant par les fleurs de bach et des compléments alimentaires. Ces
            produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous
            invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par
            télephone.
          </Typography>
        </div>
        <div
          style={{
            position: 'relative',
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '32rem',
              height: '35rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '29.5rem',
                height: '9rem',
                float: 'left',
                top: '40px',
                left: '-10px',
                borderRadius: '25px',
                backgroundColor: colors.beige,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <div
              style={{
                position: 'absolute',
                width: '7rem',
                height: '7rem',
                float: 'left',
                top: '210px',
                right: '-10px',
                borderRadius: '25px',
                backgroundColor: colors.vert,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <div
              style={{
                position: 'absolute',
                width: '11.5rem',
                height: '9rem',
                float: 'left',
                bottom: '80px',
                left: '100px',
                borderRadius: '25px',
                backgroundColor: colors.vert,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
             <div
              style={{
                position: 'absolute',
                width: '8rem',
                height: '8rem',
                float: 'left',
                bottom: '40px',
                right: '40px',
                borderRadius: '25px',
                backgroundColor: colors.beige,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <div
              style={{
                position: 'absolute',
                width: '24rem',
                height: '15rem',
                float: 'left',
                top: '115px',
                left: '10px',
                borderRadius: '25px',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(/photos/Presentation_produits.png)`,
                backgroundPosition: 'bottom',
                backgroundSize: '120%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
          </div>
        </div>
      </div>
    </>
  )
}
