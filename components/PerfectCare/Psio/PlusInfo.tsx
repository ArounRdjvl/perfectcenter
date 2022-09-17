import React from 'react'
import { Typography, makeStyles, useTheme, useMediaQuery, Grid, Link, Button} from '@material-ui/core'
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


export function PlusInfo() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
          
      </>
    )
  }
  return (
    <Grid justifyContent="flex-end" container style={{ marginTop: '2rem' }}>
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
            height: '10vw',
            width: '10vw',
            maxHeight: '15rem',
            minHeight: '12rem',
            maxWidth: '15rem',
            minWidth: '12rem',
            right: 0,
            borderRadius: '40px',
            boxShadow: '0px 0px 25px #BBBBBB',
          }}
        >
          <img alt="info_icon" src="/picto/info.png" width="60%"/>
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
            Des programmes adaptés
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
            La technologie des lunettes Psio permettent d&apos;adapter correctement l&apos;intensité, la fréquence 
            et l&apos;alternance des couleurs avec le programme sonore. Il existe une multitude de programme 
            disponibles sur la plateforme de téléchargement PsioPlanet pour répondre à vos problématiques personnelles.
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
        <Typography variant="h3" align="center">
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
            <Typography variant="body1" align="justify" style={{width: '50rem'}}>
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
