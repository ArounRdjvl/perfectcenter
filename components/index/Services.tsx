import { Typography, Grid, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Divider } from '../Divider'
import { division, DivisionDesc } from './DivisionDesc'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ImageHandle = styled('div')({
  flexGrow: 1,
  display: 'flex',
  width: '6rem',
  height: '6rem',
})

export function Services() {
  const theme = useTheme()
  const [clicked, setClicked] = React.useState<division | null>('circle')
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Typography variant="h1" align="center" style={{ margin: '2rem 0 1rem' }}>
        Nos 3 pôles
      </Typography>
      <Divider color="vert" />
      <Grid container style={{ margin: '2rem 0 1rem' }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="h3">PerfectCircle</Typography>
          <Divider color="vert" width="80px" height="4px" />
          <ImageHandle>
            <img src="picto/therapeute.png" width="100%" style={{ margin: 'auto' }} />
          </ImageHandle>
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            Nos Praticiens
          </Typography>
          <IconButton
            sx={{
              position: 'relative',
              zIndex: 3,
              top: '1rem',
              marginTop: '1.5rem',
            }}
            onClick={() => setClicked('circle')}
          >
            <ExpandMoreIcon />
          </IconButton>
          {isMobile && clicked == 'circle' && <DivisionDesc division={clicked} />}
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="h3">PerfectCare</Typography>
          <Divider color="beige" width="80px" height="4px" margin="0 0 1rem" />
          <ImageHandle>
            <img src="picto/produits.png" width="100%" style={{ margin: 'auto' }} />
          </ImageHandle>
          <Typography variant="h4" style={{ margin: '1rem' }}>
            Nos produits
          </Typography>
          <IconButton
            sx={{
              position: 'relative',
              zIndex: 3,
              top: '1rem',
              marginTop: '1.5rem',
            }}
            onClick={() => setClicked('circle')}
          >
            <ExpandMoreIcon />
          </IconButton>
          {isMobile && clicked == 'care' && <DivisionDesc division={clicked} />}
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="h3">PerfectCorporate</Typography>
          <Divider color="vert" width="80px" height="4px" />
          <ImageHandle>
            <img src="picto/Malette.png" width="100%" style={{ margin: 'auto' }} />
          </ImageHandle>
          <Typography variant="h4" style={{ margin: '1rem' }}>
            Entreprise
          </Typography>
          <IconButton
            sx={{
              position: 'relative',
              zIndex: 3,
              top: '1rem',
              marginTop: '1.5rem',
            }}
            onClick={() => setClicked('circle')}
          >
            <ExpandMoreIcon />
          </IconButton>
          {isMobile && clicked == 'corporate' && <DivisionDesc division={clicked} />}
        </Grid>
      </Grid>
      {!isMobile && clicked && <DivisionDesc division={clicked} />}
    </>
  )
}
