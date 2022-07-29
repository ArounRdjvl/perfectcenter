import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, Link, Button } from '@material-ui/core'
import { colors } from 'modules/theme'
import { Divider } from 'components/Divider'
import { Carousel } from 'components/Carousel'
import { slidesCoaches } from 'modules/data'
import { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { AutoHeightOptionsType } from 'embla-carousel-auto-height'
import { EmblaOptionsType } from 'embla-carousel-react'

const carouselOptions: EmblaOptionsType = {
  loop: true,
}

const autoplayOptions: AutoplayOptionsType = {
  stopOnMouseEnter: true,
}

const autoHeightOptions: AutoHeightOptionsType = {
  destroyHeight: '40rem',
}

export function PerfectCircleIndex() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <Grid
        justify="center"
        direction="column"
        container
        style={{
          marginTop: '2rem',
        }}
      >
        <Grid
          xs={12}
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
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.vert,
              height: '8rem',
              width: '8rem',
              left: 0,
              borderRadius: '30px',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <img
              src="picto/therapeute.png"
              width="70%"
              alt="thérapeute"
            />
          </div>
        </Grid>
        <Grid
          xs={12}
          style={{
            position: 'relative',
            minWidth: '16rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0.5rem 0',
          }}
          item
        >
          <div
            style={{
              backgroundColor: colors.beige,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              borderRadius: '25px',
              top: 0,
              padding: '0.5rem 1rem',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          >
            <Typography variant="h3" align="center">
              Nos membres
            </Typography>
          </div>
          <div
            style={{
              padding: '1rem 10vw',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="body2" align="justify">
              PerfectCenter regroupe des praticiens, des coachs et des thérapeutes partageant nos
              valeurs.
              <br />
              Pour vous, c&apos;est la possibilité de trouver dans un même lieu des pratiques
              diverses et complémentaires. Leur bienveillance et leurs talents vous accompagneront
              vers la solution la plus adaptée à vos attentes et vos besoins.
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/perfectcircle" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large">
                Nos membres
              </Button>
            </Link>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: '0 0 2rem 0',
            }}
          >
            <Typography variant="h3" align="center">
              Découvrez nos praticiens
            </Typography>
            <Divider color="vert" />
            <div style={{ margin: '2rem 0 0 0', padding: '0 0.5rem' }}>
              <Carousel
                slides={slidesCoaches}
                options={carouselOptions}
                autoplay={autoplayOptions}
                autoheight={autoHeightOptions}
              />
            </div>
          </div>
        </Grid>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '1rem 0 2rem 0',
          }}
        >
          <Typography variant="h3" align="center">
            Vous êtes praticiens ? Rejoignez nous !
          </Typography>
          <Divider color="vert" width="150px" />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 2rem',
          }}
        >
          <Typography variant="body2" align="justify">
            Vous pensez être animés des mêmes valeurs que nous ?<br />
            Rejoignez notre équipe PerfectCircle et partagez l&apos;aventure avec nous. Vous
            profiterez d&apos;un environnement convivial, productif et enrichissant.
            <br />
            <br />
            Télécharger notre brochure des différents avantages à être membre ici.
            <br />
            <br />
            Pour rejoindre l&apos;équipe, contactez nous via le formulaire ci-dessous.
          </Typography>
          <Link href="/contact" underline="none" style={{ margin: '2rem 0' }}>
            <Button variant="contained" color="secondary" size="large">
              Nous contacter
            </Button>
          </Link>
        </div>
      </Grid>
    )
  }
  return (
    <Grid justify="flex-end" container>
      <Grid
        xs={9}
        style={{
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
            alignItems: 'center',
            width: '100%',
            right: 0,
            top: 0,
            padding: '0.7rem',
            borderRadius: '30px 0 0 30px ',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <Typography variant="h2" align="left" style={{ marginLeft: '5vw' }}>
            Nos membres
          </Typography>
        </div>
        <div
          style={{
            padding: '1rem 5rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography variant="body1" align="justify" style={{ margin: '2rem 0' }}>
            PerfectCenter regroupe des praticiens, des coachs et des thérapeutes partageant nos
            valeurs.
            <br />
            Pour vous, c&apos;est la possibilité de trouver dans un même lieu des pratiques diverses
            et complémentaires. Leur bienveillance et leurs talents vous accompagneront vers la
            solution la plus adaptée à vos attentes et vos besoins.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/perfectcircle" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large" style={{ width: '100%', fontSize: '20px', marginBottom: '1rem' }}>
                Nos membres
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid
        xs={3}
        style={{
          position: 'relative',
          zIndex: 3,
        }}
        item
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.vert,
            height: '12rem',
            width: '12rem',
            left: 0,
            borderRadius: '40px',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <img
            src="picto/therapeute.png"
            width="70%"
            alt="Praticiens"
          />
        </div>
      </Grid>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '0 0 2rem 0',
        }}
      >
        <Typography variant="h3" align="center">
          Découvrez nos praticiens
        </Typography>
        <Divider color="vert" />
        <div style={{ margin: '2rem 0 0 0', padding: '0 6rem' }}>
          <Carousel
            slides={slidesCoaches}
            options={carouselOptions}
            autoplay={autoplayOptions}
            autoheight={autoHeightOptions}
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '1rem 0 2rem 0',
        }}
      >
        <Typography variant="h3" align="center">
          Vous êtes praticiens ? Rejoignez nous !
        </Typography>
        <Divider color="vert" width="150px" />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: '1rem 0 2rem 0',
        }}
      >
        <div
          style={{
            width: '40%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '30rem',
              width: '20rem',
              maxWidth: '45rem',
              backgroundImage: 'url(/photos/Nous_rejoindre.png)',
              backgroundPosition: '40% 10%',
              backgroundSize: '280%',
              backgroundRepeat: 'no-repeat',
              borderRadius: '30px',
              boxShadow: '0px 0px 25px #BBBBBB',
            }}
          />
        </div>
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 3vw',
          }}
        >
          <Typography variant="body1" align="justify">
            Vous pensez être animés des mêmes valeurs que nous ?<br />
            Rejoignez notre équipe PerfectCircle et partagez l&apos;aventure avec nous. Vous
            profiterez d&apos;un environnement convivial, productif et enrichissant.
            <br />
            <br />
            Télécharger notre brochure des différents avantages à être membre ici.
            <br />
            <br />
            Pour rejoindre l&apos;équipe, contactez nous via le formulaire ci-dessous.
          </Typography>
          <Link href="/contact" underline="none" style={{ marginTop: '2rem' }}>
            <Button variant="contained" color="secondary" size="large" style={{ width: '100%', fontSize: '20px', marginBottom: '1rem' }}>
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </Grid>
  )
}
