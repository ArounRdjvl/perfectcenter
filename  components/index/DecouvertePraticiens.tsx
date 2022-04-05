import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { Divider } from '../Divider';
import { colors } from 'modules/theme';
import { PraticiensCarousel } from '../index/PraticiensCarousel';

export function DecouvertePraticiens() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile) {
    return (
      <div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '15rem',
            float: 'left',
            backgroundColor: colors.vert
          }}
        >
          <div
            style={{
              position: 'relative',
              right: 0,
              marginTop: '2.9vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h2" color="textSecondary" align="center">
              Découvrer nos praticiens
            </Typography>
            <Divider color={'beige'} width="9rem" />
          </div>
          <div
            style={{
              position: 'absolute',
              width: '60vw',
              minWidth: '15rem',
              right: '10vw',
              top: '6rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <Typography variant="h4" color="textSecondary" align="right">
              "Nul ne sait ce que nous savons ensemble"
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ marginRight: '2rem', fontStyle: 'italic' }}
            >
              Euripide
            </Typography>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '100%',
              width: '30%',
              minWidth: '8rem',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(/photos/cactus.png)',
              backgroundPosition: 'bottom left',
              backgroundSize: '100%'
            }}
          ></div>
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            float: 'left',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: colors.vert
          }}
        >
          <PraticiensCarousel />
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxHeight: '30vw',
        height: '30rem'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '50%',
          height: '100%',
          float: 'left',
          backgroundColor: colors.vert
        }}
      >
        <div
          style={{
            position: 'relative',
            right: 0,
            margin: '2.5vw 0 0 5vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h2" color="textSecondary" align="center">
            Découvrer nos praticiens
          </Typography>
          <Divider color={'beige'} width="9rem" />
        </div>
        <div
          style={{
            width: '30vw',
            position: 'absolute',
            right: '2rem',
            top: '12vw',
            margin: '0 5vw 0 0vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <Typography variant="h3" color="textSecondary" align="right">
            "Nul ne sait ce que nous savons ensemble"
          </Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            style={{ marginRight: '2rem', fontStyle: 'italic' }}
          >
            Euripide
          </Typography>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '40%',
            maxWidth: '35vw',
            maxHeight: '35vw',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(/photos/cactus.png)',
            backgroundPosition: 'bottom left',
            backgroundSize: '100%'
          }}
        ></div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '50%',
          height: '100%',
          float: 'left',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.vert
        }}
      >
        <PraticiensCarousel />
      </div>
    </div>
  );
}
