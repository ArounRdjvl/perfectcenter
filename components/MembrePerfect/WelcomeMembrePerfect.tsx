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

export function WelcomeMembrePerfect() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
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
          <TitleBar title="Nos membres" color="vert" padding= "0 0 3rem 0" justifyContent= "center" paddingMobile="2rem 0 2rem 5vw" />
          <Typography variant="body1" align="justify">
            Coach, thérapeute, conférencier, consultant, sophrologue, coach sportif... Nous
            capitalisons nos talents pour offrir des prestations liées au bien-être et au
            développement de tout potentiel, de son vrai &quot;Soi&quot;. En entreprise et en
            individuel, en présentiel ou en distanciel, nos palettes sont infinies pour répondre
            aux besoins des personnes qui viennent à nous...
            <br />
            Nous créons des événements, formations et ateliers en collectif en plus des
            consultations individuelles que nous pouvons proposer.
          </Typography>
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
                backgroundColor: colors.vert,
                backgroundImage: 'url(/picto/Engagement.png)',
                backgroundSize: '50%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
              />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold', height: '3rem'}}
            >
              Engagé
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
                backgroundColor: colors.vert,
                backgroundImage: 'url(/picto/Teste.png)',
                backgroundSize: '50%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
              />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold', height: '3rem'}}
            >
              Compétent
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
                backgroundColor: colors.vert,
                backgroundImage: 'url(/picto/Bras_mains.png)',
                backgroundSize: '50%',
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
              />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: '1rem', fontWeight: 'bold', height: '3rem'}}
            >
              Partage nos valeurs
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
          <TitleBar title="Nos membres" color="vert" padding= "0 0 3rem 0" paddingMobile="2rem 0 0 5vw" />
          <Typography variant="body1" align="justify">
            Coach, thérapeute, conférencier, consultant, sophrologue, coach sportif... Nous
            capitalisons nos talents pour offrir des prestations liées au bien-être et au
            développement de tout potentiel, de son vrai &quot;Soi&quot;. En entreprise et en
            individuel, en présentiel ou en distanciel, nos palettes sont infinies pour répondre
            aux besoins des personnes qui viennent à nous...
            <br />
            Nous créons des événements, formations et ateliers en collectif en plus des
            consultations individuelles que nous pouvons proposer.
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
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                top: '40px',
                right: '-15px',
                background: colors.vert,
              }}
            >
              <div
                className={classes.img}
                style={{
                  backgroundImage: 'url(/picto/Engagement.png)',
                  backgroundSize: '60%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                style={{width: '70%', marginBottom: '12px', fontWeight: 'bold' }}
              >
                Engagé
              </Typography>
            </div>
            <div
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                bottom: '60px',
                right: '50px',
                background: colors.vert,
              }}
            >
              <div
                className={classes.img}
                style={{
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
                style={{width: '70%', marginBottom: '12px', fontWeight: 'bold' }}
              >
                Partage nos valeurs
              </Typography>
            </div>
            <div
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                top: '150px',
                left: '0',
                background: colors.vert,
              }}
            >
              <div
                className={classes.img}
                style={{
                  backgroundImage: 'url(/picto/Teste.png)',
                  backgroundSize: '70%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                style={{width: '70%', marginBottom: '15px', fontWeight: 'bold' }}
              >
                Compétent
              </Typography>
            </div>
            <div
              className={classes.bulle}
              style={{
                width: '20rem',
                height: '20rem',
                bottom: '200px',
                right: '65px',
                backgroundColor: colors.beige,
              }}
             />
             <div
              className={classes.bulle}
              style={{
                width: '6rem',
                height: '6rem',
                top: '0',
                left: '140px',
                backgroundColor: colors.vert
              }}
            />
            <div
              className={classes.bulle}
              style={{
                width: '6rem',
                height: '6rem',
                bottom: '50px',
                left: '80px',
                backgroundColor: colors.beige,
              }}
            />
            <div
              className={classes.bulle}
              style={{
                width: '6rem',
                height: '6rem',
                bottom: '150px',
                right: '0',
                borderRadius: '100%',
                backgroundColor: colors.beige,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
