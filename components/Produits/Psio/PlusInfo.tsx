import React from 'react'
import { Typography, useTheme, useMediaQuery, Grid, Link, Button} from '@material-ui/core'
import { colors } from 'modules/theme'
import { Divider } from 'components/Divider'

export function PlusInfo() {
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
          <img src="/picto/info.png" alt='' width={isMobile ? "55%" : "60%"} />
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
              Des programmes adaptés
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
             La technologie des lunettes Psio permettent d&apos;adapter correctement l&apos;intensité, la fréquence et l&apos;alternance des couleurs avec le programme sonore.
             Il existe une multitude de programme disponibles sur la plateforme de téléchargement PsioPlanet pour répondre à vos problématiques personnelles.
          </Typography>
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
        <Typography variant={isMobile ? 'h4' : 'h3'} align="center">
          Une technologie approuvée
        </Typography>
        <Divider color="vert" />
        <div style={{
            position: 'relative',
            margin: '2rem 0',
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant={isMobile ? 'body2' : 'body1'} align="justify" style={{width: '85%'}}>
                Depuis plus de vingt ans, la technologie PSIO est utilisée avec un grand succès dans les hôpitaux, 
                notamment pour aider à la gestion du stress en anesthésiologie locale, en salle de réveil ou encore en laboratoire du sommeil.<br />
                Durant le premier confinement, les dispositifs PSIO ont été déployés dans plusieurs hôpitaux parisiens tels que la Pitié Salpêtrière, 
                pour permettre au personnel hospitalier de tenir le rythme, grâce à des programmes de relaxation reboostant.<br />
                La NASA a récemment acheté le Psio pour tester son efficacité pour la régulation du décalage horaire et la gestion du stress des astronautes. 
                En effet, les expériences cliniques ainsi que les études scientifiques ont démontré que les effets de la stimulation par la lumière procuraient un réel effet relaxant à son utilisateur.<br />
                Le PSIO séduit également les utilisateurs en quête de performance : musiciens et sportifs de haut niveau utilisent le PSIO pour faciliter la gestion du stress avant un grand évènement.
            </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="https://www.psio.com/fr/" underline="none" style={{ marginBottom: '2rem' }}>
            <Button variant="contained" color="secondary" size="large">
                En savoir plus
            </Button>
        </Link>
        </div>
        
      </div>
    </Grid>
  )
}
