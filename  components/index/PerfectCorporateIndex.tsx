import React from 'react';
import {
  Grid,
  useTheme,
  Typography,
  makeStyles,
  useMediaQuery,
  Link,
  Button
} from '@material-ui/core';
import { colors } from '../../modules/theme';
import { Divider } from '../Divider';

const useStyles = makeStyles((theme) => {
  return {
    img: {
      position: 'relative',
      left: 0,
      height: '8vw',
      width: '8vw',
      maxHeight: '6rem',
      maxWidth: '6rem'
    }
  };
});

export function PerfectCorporateIndex() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile) {
    return (
      <>
        <Grid
          justify="center"
          direction="column"
          container
          style={{
            marginTop: '2rem'
          }}
        >
          <Grid
            xs={12}
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
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
                boxShadow: '0px 0px 25px #BBBBBB'
              }}
            >
              <img src="picto/Malette.png" width="55%" style={{ marginTop: '1rem' }} />
              <Typography variant="h3" color="textSecondary" style={{ margin: '1rem 0 0 0' }}>
                Offres entreprise
              </Typography>
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
              margin: '0.5rem 0'
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
                boxShadow: '0px 0px 25px #BBBBBB'
              }}
            >
              <Typography variant="h3" align="center">
                PerfectCorporate
              </Typography>
            </div>
            <div
              style={{
                padding: '1rem 10vw',
                position: 'relative',
                zIndex: 2
              }}
            >
              <Typography variant="body1" align="justify">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href="/perfectcorporate" underline="none" style={{ marginBottom: '2rem' }}>
                <Button variant="contained" color="secondary" size="large">
                  PerfectCorporate
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <Grid justify="flex-end" container>
      <Grid
        xs={9}
        style={{
          position: 'relative',
          paddingTop: '3rem',
          minHeight: '15rem'
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
            boxShadow: '0px 0px 25px #BBBBBB'
          }}
        >
          <Typography variant="h2" align="left" style={{ marginLeft: '5vw' }}>
            PerfectCorporate
          </Typography>
        </div>
        <div
          style={{
            padding: '1rem 5rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          <Typography variant="body1" align="justify" style={{ margin: '2rem 0' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/PerfectCorporate" underline="none" style={{ marginBottom: '2rem' }}>
              <Button variant="contained" color="secondary" size="large">
                PerfectCorporate
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid
        xs={3}
        style={{
          position: 'relative',
          zIndex: 3
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
            height: '15vw',
            width: '15vw',
            maxHeight: '15rem',
            minHeight: '12rem',
            maxWidth: '15rem',
            minWidth: '12rem',
            left: 0,
            borderRadius: '40px',
            boxShadow: '0px 0px 25px #BBBBBB'
          }}
        >
          <img src="picto/Malette.png" width="60%" style={{ marginTop: '1rem' }} />
          <Typography variant="h3" color="textSecondary" style={{ margin: '1rem 0 0 0' }}>
            Offres entreprises
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
