import React from 'react';
import { Grid, useTheme, Typography } from '@material-ui/core';
import { colors } from '../modules/theme';

export interface BanniereProps {
  titre: string;
  description: string;
  photo: string;
  photoSize: string;
  photoWidth: string;
  photoHeight: string;
}

export function BanniereInfo(props: BanniereProps) {
  const theme = useTheme();

  return (
    <>
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
              {props.titre}
            </Typography>
          </div>
          <div
            style={{
              padding: '1rem 5rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            <Typography variant="body1" align="justify" style={{ marginTop: '2rem' }}>
              {props.description}
            </Typography>
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              paddingRight: '0.8rem',
              backgroundColor: theme.palette.secondary.main,
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${props.photo})`,
              backgroundPosition: 'center',
              backgroundSize: props.photoSize,
              position: 'absolute',
              height: props.photoHeight,
              width: props.photoWidth,
              left: 0,
              borderRadius: '40px',
              boxShadow: '0px 0px 25px #BBBBBB'
            }}
          ></div>
        </Grid>
      </Grid>
    </>
  );
}
