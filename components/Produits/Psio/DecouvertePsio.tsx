import React from 'react'
import { Typography, makeStyles, useTheme, useMediaQuery, Container, Link, Button} from '@material-ui/core'
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


export function DecouvertePsio() {
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
                backgroundColor: colors.vert,
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
                backgroundColor: colors.vert,
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
                backgroundColor: colors.vert,
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
                backgroundColor: colors.vert,
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
        marginBottom: '3rem'
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
              marginTop: '2rem'
            }}
          >
            <Typography variant="h2" align="center" color="textSecondary">
              Envie d&apos;une pause relaxation ?
            </Typography>
            <Divider color="beige" width='10rem'/>
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '60%',
                height: '15rem',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '3.5rem'
              }}
            >
              <Typography variant="h3" align="center" color="textSecondary">
                Venez essayer le Psio chez PerfectCenter<br/>en profitant de notre séance découverte gratuite !
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
                <Link href="/contact" underline="none" style={{ marginBottom: '2rem' }}>
                  <Button variant="contained" color="primary" size="large">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          <div
              style={{
                width: '40%',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  margin: '2rem',
                  width: '20rem',
                  height: '15rem',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  borderRadius: '15%',
                  backgroundColor: theme.palette.secondary.main,
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url(/photos/LitPsio.png)',
                  backgroundPosition: 'center'
                }}
              />
          </div>
        </div>
      </Container>
    </div>
  )
}

  
  
  /* return (
    <Grid container>
      <Grid
        xs={6}
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        item
      >
        <div
          style={{
            width: '80%',
          }}
        >
          <Typography variant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat
          </Typography>
        </div>
      </Grid>
      <Grid
        xs={6}
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        item
      >
        <div
          style={{
            zIndex: 2,
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/produits/PsioCouleur.png)`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
            width: '95%',
            height: '20rem',
          }}
        />
        <div
          style={{
            zIndex: 1,
            position: 'absolute',
            width: '100%',
            height: '20rem',
            backgroundImage:
              'radial-gradient(farthest-corner at 50% 50%, #83D4ED 15%, #EBEAE8 70%)',
          }}
        />
      </Grid>
    </Grid>
  )
}
 */