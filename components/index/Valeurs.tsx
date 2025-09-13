import { ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { colors } from '../../modules/theme'
import { WelcomeMsg } from './WelcomeMsg'
import { TitleBar } from 'components/TitleBar'

const CustomImg = styled('div')({
  position: 'relative',
  left: 0,
  height: '8vw',
  width: '8vw',
  maxHeight: '6rem',
  maxWidth: '6rem',
})

export function Valeurs() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <ThemeProvider theme={theme}>
        <WelcomeMsg />
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '30rem',
            marginTop: '3rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: 0,
              bottom: 0,
              right: 0,
              height: '100%',
              width: '45rem',
              maxWidth: '45rem',
              backgroundImage: 'url(/photos/Salle_consultation2.png)',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '-160vw',
            }}
          ></div>

          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              height: '100%',
              width: '100%',
              left: 0,
              clipPath: 'ellipse(75% 125% at 0% -20%)',
              backgroundColor: '#EBEAE8',
            }}
          >
            <div
              style={{
                position: 'absolute',
                zIndex: 1,
                bottom: 0,
                padding: '0 0 2rem 4vw',
                height: '100%',
                width: '100%',
                clipPath: 'ellipse(75% 125% at 0% -20%)',
                backgroundColor: '#EBEAE8',
              }}
            >
              <TitleBar
                title="Nos valeurs"
                background={true}
                color="vert"
                paddingMobile="2rem 0 0 5vw"
              />
            </div>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              right: '5vw',
              top: '-1rem',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '50%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              background: colors.vert,
            }}
          >
            <div
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Bras_mains.png)',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              style={{ marginBottom: '5px', fontWeight: 'bold' }}
            >
              Synergie
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              right: '24vw',
              top: '6.5rem',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '50%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              background: colors.beige,
            }}
          >
            <CustomImg
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Coeur_sur_main.png)',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: '-0.5rem', marginBottom: '0.7rem', fontWeight: 'bold' }}
            >
              Bienveillance
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              right: '35.5vw',
              top: '15.5rem',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '50%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              background: colors.vert,
            }}
          >
            <CustomImg
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Coeur_deuxmains.png)',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              style={{ marginBottom: '0.7rem', fontWeight: 'bold' }}
            >
              Générosité
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              right: '54vw',
              top: '23rem',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '50%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              background: colors.beige,
            }}
          >
            <CustomImg
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Coeur_main.png)',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography variant="body1" align="center" style={{ fontWeight: 'bold' }}>
              Partage
            </Typography>
          </div>
        </div>
      </ThemeProvider>
    )
  }
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '87vh',
          margin: '2rem 0 4rem 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 0,
            bottom: 0,
            right: 0,
            height: '100%',
            width: '80%',
            backgroundImage: 'url(/photos/Salle_consultation2.png)',
            backgroundPosition: 'bottom right',
            backgroundSize: '80%',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
            height: '100%',
            width: '100%',
            left: 0,
            clipPath: 'ellipse(75% 125% at 0% -20%)',
            backgroundColor: '#EBEAE8',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              padding: '0 0 2rem 4vw',
              height: '100%',
              width: '100%',
              clipPath: 'ellipse(75% 125% at 0% -20%)',
              backgroundColor: '#EBEAE8',
            }}
          >
            <WelcomeMsg />
          </div>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '23vw',
            top: '0.5vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '10rem',
            maxHeight: '10rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '50%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.vert,
          }}
        >
          <CustomImg
            style={{
              backgroundImage: 'url(/picto/Bras_mains.png)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            style={{ marginTop: '8px', fontWeight: 'bold' }}
          >
            Synergie
          </Typography>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '31vw',
            top: '28vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '10rem',
            maxHeight: '10rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '50%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.beige,
          }}
        >
          <CustomImg
            style={{
              backgroundImage: 'url(/picto/Coeur_sur_main.png)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            align="center"
            style={{ marginBottom: '1rem', fontWeight: 'bold' }}
          >
            Bienveillance
          </Typography>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '43vw',
            top: '51vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '10rem',
            maxHeight: '10rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '50%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.vert,
          }}
        >
          <CustomImg
            style={{
              backgroundImage: 'url(/picto/Coeur_deuxmains.png)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            style={{ marginTop: '8px', fontWeight: 'bold' }}
          >
            Générosité
          </Typography>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '60vw',
            top: '68vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '10rem',
            maxHeight: '10rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '50%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.beige,
          }}
        >
          <CustomImg
            style={{
              backgroundImage: 'url(/picto/Coeur_main.png)',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography variant="h4" align="center" style={{ marginTop: '8px', fontWeight: 'bold' }}>
            Partage
          </Typography>
        </div>
      </div>
    </>
  )
}
