import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, Link, Button } from '@material-ui/core'
import { colors } from 'modules/theme'
import { dataProducts } from 'modules/data'
import { Divider } from 'components/Divider'
import { Carousel } from 'components/Carousel'
import { AutoplayOptionsType } from 'embla-carousel-autoplay'
import { AutoHeightOptionsType } from 'embla-carousel-auto-height'
import { EmblaOptionsType } from 'embla-carousel-react'
import { SlideProduct } from 'components/SlideProduct'

const carouselOptions: EmblaOptionsType = {
  loop: true,
}

const autoplayOptions: AutoplayOptionsType = {
  stopOnMouseEnter: true,
}

const autoHeightOptions: AutoHeightOptionsType = {
  destroyHeight: 'auto',
}

export function PrestationsIndex() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      justifyContent={isMobile ? "center" : "flex-end"}
      direction={isMobile ? "column" : "row"}
      container
      style={isMobile ? { marginTop: '2rem' } : { margin: '4rem 0' }}>
      <Grid
        xs={isMobile ? 12 : 3}
        style={isMobile ?
          {
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
          :
          {
            position: 'relative',
            zIndex: 3
          }}
        item
      >
        <div
          style={{
            position: isMobile ? 'relative' : 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.vert,
            height: isMobile ? '8rem' : '12rem',
            width: isMobile ? '8rem' : '12rem',
            left: isMobile ? 0 : '',
            right: isMobile ? '' : 0,
            borderRadius: isMobile ? '30px' : '40px',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <img src="picto/Prestations.png" alt="Nos prestations" width={isMobile ? "55%" : "60%"} />
        </div>
      </Grid>
      <Grid
        xs={isMobile ? 12 : 9}
        style={isMobile ?
          {
            position: 'relative',
            minWidth: '16rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0.5rem 0',
          }
          :
          {
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
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center',
            width: isMobile ? '90%' : '100%',
            right: isMobile ? '' : 0,
            top: 0,
            padding: isMobile ? '0.5rem 1rem' : '0.7rem',
            borderRadius: isMobile ? '25px' : '0 30px 30px 0',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            align={isMobile ? "center" : "left"}
            style={isMobile ? {} : { marginLeft: '5vw' }}>
            Nos prestations
          </Typography>
        </div>
        <div
          style={{
            padding: isMobile ? '1rem 10vw' : '1rem 5rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant={isMobile ? "body2" : "body1"}
            align="justify"
            style={isMobile ? { marginBottom: '16px' } : { margin: '2rem 0' }}>
            Depuis plus de 14 ans, Erik HENRION n&apos;a cessé de chercher des produits et des
            services qui se démarquent par leur innovation et leur efficacité.<br />
            Chez PerfectCenter, nous vous proposons toute une gamme de produit allant des lunettes de
            luminothérapie, en passant par les fleurs de bach et des compléments alimentaires. Ces
            produits sont utilisés régulièrement par nos praticiens et thérapeutes. Nous vous
            invitons à venir les découvir directement dans nos locaux ou en prennant rendez-vous par
            télephone.
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/prestations" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large" style={isMobile ? {} : { width: '100%', fontSize: '20px', marginBottom: '1rem' }}>
                Nos prestations
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
      {isMobile && <div
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
          Découvrez nos prestations
        </Typography>
        <Divider color="vert" />
        <div style={{ margin: '2rem 0 0 0', padding: '0 6rem' }}>
          <Carousel
            slides={dataProducts.map((product, i) => (
              <SlideProduct product={product} key={i} />
            ))}
            options={carouselOptions}
            autoplay={autoplayOptions}
            autoheight={autoHeightOptions}
          />
        </div>
      </div>}
    </Grid >
  )
}
