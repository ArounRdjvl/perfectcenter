import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { colors } from 'modules/theme'
import { Divider } from 'components/Divider'

export function WelcomeMsg() {
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0 2rem 0 ',
          }}
        >
          <div
            style={{
              position: 'relative',
            }}
          >
            <Typography variant="h1" align="center">
              Bienvenue chez PerfectCenter
            </Typography>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Divider color="vert" width="150px" margin="1rem 0 0 0" />
            </div>
          </div>
        </div>
        <Typography variant="body1" align="center">
          PerfectCenter est une entreprise familiale. Créer une synergie et une alchimie humaine
          autour d&apos;activités holistiques est notre mission. Essayer, apprendre, recommencer et
          développer des idées, des innovations.. Nous nous positionnons comme un laboratoire de
          bien-être où chacun est libre de s&apos;engager avec bienveillance et générosité. <br />
          Nous proposons des prestations, des produits et des formations innovantes et performantes
          aux particuliers et aux professionnels.
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
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 0 2rem 0 ',
            }}
          >
            <div
              style={{
                position: 'relative',
              }}
            >
              <Typography variant="h1" align="center">
                Bienvenue chez PerfectCenter
              </Typography>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Divider color="vert" width="200px" margin="0.5rem 0 0 0" />
              </div>
            </div>
          </div>
          <Typography variant="body1" align="center">
            PerfectCenter est une entreprise familiale. Créer une synergie et une alchimie humaine
            autour d&apos;activités holistiques est notre mission. Essayer, apprendre, recommencer
            et développer des idées, des innovations.. Nous nous positionnons comme un laboratoire
            de bien-être où chacun est libre de s&apos;engager avec bienveillance et générosité.{' '}
            <br />
            Nous proposons des prestations, des produits et des formations innovantes et
            performantes aux particuliers et aux professionnels.
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
                height: '15rem',
                float: 'left',
                borderRadius: '25px',
                backgroundColor: colors.beige,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '7rem',
                height: '15rem',
                float: 'left',
                top: '100px',
                right: '0',
                borderRadius: '25px',
                backgroundColor: colors.vert,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '16rem',
                height: '15rem',
                float: 'left',
                bottom: '0',
                right: '120px',
                borderRadius: '25px',
                backgroundColor: colors.vert,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '20rem',
                height: '30rem',
                float: 'left',
                bottom: '35px',
                left: '30px',
                borderRadius: '25px',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(/photos/plante_accueil.png)`,
                backgroundPosition: 'center',
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
