import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, Link, Button } from '@material-ui/core'
import { colors } from 'modules/theme'
import { dataProducts } from 'modules/data'
import { Divider } from 'components/Divider'
import { Carousel } from 'components/Carousel'
import { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { AutoHeightOptionsType } from 'embla-carousel-auto-height'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Slide } from 'components/Slide'

const carouselOptions: EmblaOptionsType = {
  loop: true,
}

const autoplayOptions: AutoplayOptionsType = {
  stopOnMouseEnter: true,
}

const autoHeightOptions: AutoHeightOptionsType = {
  destroyHeight: 'auto',
}

export function ProduitIndex() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <Grid
        justifyContent="center"
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
            <img src="picto/produits.png" width="55%" alt="Nos produits" />
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
              Nos produits
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
              Depuis plus de 14 ans, Erik HENRION n&apos;a cessé de chercher des produits et des
              services qui se démarquent par leur innovation et leur efficacité.
              <br />
              Chez PerfectCenter, nous vous proposons toute une gamme de produit allant des lunettes
              de luminothérapie, en passant par les fleurs de bach et des compléments alimentaires.
              Ces produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous
              invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous
              par télephone.
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/produits" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large">
                Nos produits
              </Button>
            </Link>
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
            Découvrez nos produits
          </Typography>
          <Divider color="vert" />
          <div style={{ margin: '2rem 0 0 0', padding: '0 6rem' }}>
            <Carousel
              slides={dataProducts.map((product, i) => (
                <Slide
                  src={product.photo}
                  key={i}
                  redirect=""
                  alt="Nos produits"
                  title={product.name} />
              ))}
              options={carouselOptions}
              autoplay={autoplayOptions}
              autoheight={autoHeightOptions}
            />
          </div>
        </div>
      </Grid>
    )
  }
  return (
    <Grid justifyContent="flex-end" container style={{ margin: '6rem 0' }}>
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
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.vert,
            height: '12rem',
            width: '12rem',
            right: 0,
            borderRadius: '40px',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <img src="picto/produits.png" alt="nos produits" width="60%" />
        </div>
      </Grid>
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
            borderRadius: '0 30px 30px 0',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <Typography variant="h2" align="left" style={{ marginLeft: '5vw' }}>
            Nos produits
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
            Depuis plus de 14 ans, Erik HENRION n&apos;a cessé de chercher des produits et des
            services qui se démarquent par leur innovation et leur efficacité.
            <br />
            Chez PerfectCenter, nous vous proposons toute une gamme de produit allant des lunettes
            de luminothérapie, en passant par les fleurs de bach et des compléments alimentaires.
            Ces produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous
            invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par
            télephone.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/produits" underline="none" style={{ marginBottom: '2rem' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ width: '100%', fontSize: '20px', marginBottom: '1rem' }}
              >
                Nos produits
              </Button>
            </Link>
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
          margin: '0 0 2rem 0',
        }}
      >
        <Typography variant="h3" align="center">
          Découvrez nos produits
        </Typography>
        <Divider color="vert" />
        <div style={{ margin: '2rem 0 0 0', padding: '0 6rem' }}>
          <Carousel
            slides={dataProducts.map((product, i) => (
              <Slide
                src={product.photo}
                key={i}
                redirect=""
                alt="Nos produits"
                title={product.name} />
            ))}
            options={carouselOptions}
            autoplay={autoplayOptions}
            autoheight={autoHeightOptions}
          />
        </div>
      </div>
    </Grid>
  )
}
