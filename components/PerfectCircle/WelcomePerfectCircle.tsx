import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { colors } from '../../modules/theme'
import { WelcomeMsg2 } from './WelcomeMsg2'

const useStyles = makeStyles((theme) => ({
  img: {
    position: 'relative',
    left: 0,
    height: '8vw',
    width: '8vw',
    maxHeight: '8rem',
    maxWidth: '8rem',
  },
}))

export function WelcomePerfectCircle() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
        <WelcomeMsg2 />
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
              backgroundImage: 'url(/photos/Salle_consultation.png)',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '-160vw',
            }}
          />

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
              {/* <div  
                                style={{
                                    position: "absolute",
                                    width: "17vw",
                                    height: "17vw",
                                    maxHeight : "15rem",
                                    maxWidth : "15rem",
                                    left:"10vw",
                                    bottom:"12vh",
                                    backgroundImage: "url(/picto/Feuille_grande_Beige.png)",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    transform: "rotate(50deg)",
                                    backgroundSize: "80%"
                                }}
                            >
                            </div> */}
              <TitleBar
                title="Nos valeurs"
                background
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
              className={classes.img}
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Bras_mains.png)',
                backgroundSize: '80%',
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
              Partage nos valeurs
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
            <div
              className={classes.img}
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Engagement.png)',
                backgroundSize: '70%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: '-0.5rem', marginBottom: '0.7rem', fontWeight: 'bold' }}
            >
              Engagés
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
            <div
              className={classes.img}
              style={{
                height: '5rem',
                width: '5rem',
                backgroundImage: 'url(/picto/Teste.png)',
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              style={{ marginBottom: '0.7rem', fontWeight: 'bold' }}
            >
              Téstés et validés
            </Typography>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          paddingLeft: '6rem',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '87vh',
          margin: '2rem 0 2rem 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 0,
            bottom: 0,
            right: 0,
            height: '87vh',
            width: '100rem',
            backgroundImage: 'url(/photos/Salle_consultation.png)',
            backgroundPosition: 'bottom right',
            backgroundSize: '80%',
          }}
        />

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
            <WelcomeMsg2 />
            {/* <div  
                                style={{
                                    position: "absolute",
                                    width: "17vw",
                                    height: "17vw",
                                    maxHeight : "15rem",
                                    maxWidth : "15rem",
                                    left:"10vw",
                                    bottom:"7vh",
                                    backgroundImage: "url(/picto/Feuille_grande_Beige.png)",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    transform: "rotate(50deg)",
                                    backgroundSize: "80%"
                                }}
                            >
                            </div> */}
          </div>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '23.2vw',
            top: '7vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '13rem',
            maxHeight: '13rem',
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
            className={classes.img}
            style={{
              backgroundImage: 'url(/picto/Valeurs.png)',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            color="textSecondary"
            align="center"
            style={{ width: '90%', fontWeight: 'bold' }}
          >
            Partage nos valeurs
          </Typography>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '33.5vw',
            top: '36vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '13rem',
            maxHeight: '13rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '50%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.beige,
          }}
        >
          <div
            className={classes.img}
            style={{
              backgroundImage: 'url(/picto/Engagement.png)',
              backgroundSize: '70%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            align="center"
            style={{ width: '70%', marginBottom: '1rem', fontWeight: 'bold' }}
          >
            Engagés
          </Typography>
        </div>
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            right: '48vw',
            top: '58.9vh',
            width: '15vw',
            height: '15vw',
            maxWidth: '13rem',
            maxHeight: '13rem',
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
            className={classes.img}
            style={{
              marginRight: '3px',
              backgroundImage: 'url(/picto/Teste.png)',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Typography
            variant="h4"
            color="textSecondary"
            align="center"
            style={{ width: '70%', fontWeight: 'bold' }}
          >
            Testés et validés
          </Typography>
        </div>
      </div>
    </>
  )
}
