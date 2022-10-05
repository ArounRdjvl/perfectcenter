import { Container, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { colors } from 'modules/theme'
import { Divider } from 'components/Divider'

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

export function Valeurs() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" align="center">
              Nos valeurs
            </Typography>
            <Divider color="vert" />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
            margin: '2rem 0 5rem 0',
          }}
        >
          <div
            style={{
              zIndex: 2,
              width: '6rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <div
              className={classes.img_phone}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_sur_main.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold' }}
            >
              Bienveillance
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              width: '6rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <div
              className={classes.img_phone}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Bras_mains.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold' }}
            >
              Synergie
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              width: '6rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <div
              className={classes.img_phone}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_main.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold' }}
            >
              Partage
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              width: '6rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <div
              className={classes.img_phone}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_deuxmains.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
             />
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold' }}
            >
              Générosité
            </Typography>
          </div>
        </div>
      </>
    )
  }
  return (
    <div 
      style={{
        width: '100%',
        backgroundColor: colors.vert,
        padding:'1rem',
        marginBottom: '9rem'
      }}
    >
      <Container>
        <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" align="center" color="textSecondary">
              Nos valeurs
            </Typography>
            <Divider color="beige" />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
            margin: '2rem 0 2rem 0',
          }}
        >
          <div
            style={{
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={classes.img}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_sur_main.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 10px #555555',
              }}
            />
            <Typography variant="h4" align="center" color="textSecondary" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Bienveillance
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={classes.img}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Bras_mains.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 10px #555555',
              }}
            />
            <Typography variant="h4" align="center" color="textSecondary" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Synergie
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={classes.img}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_main.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 10px #555555',
              }}
            />
            <Typography variant="h4" align="center" color="textSecondary" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Partage
            </Typography>
          </div>
          <div
            style={{
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={classes.img}
              style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: colors.blanc,
                backgroundImage: 'url(/picto/Coeur_deuxmains.png)',
                backgroundSize: '70%',
                boxShadow: '0px 0px 10px #555555',
              }}
            />
            <Typography variant="h4" align="center" color="textSecondary" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Générosité
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  )
}
