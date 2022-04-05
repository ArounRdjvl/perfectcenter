import React from 'react';
import { Grid, useTheme, Typography } from '@material-ui/core';
import { colors } from '../../../modules/theme';
import { ColorizeRounded } from '@material-ui/icons';

export function LumiereMusique() {
  const theme = useTheme();

  return (
    <>
      <Grid container>
        <Grid
          xs={6}
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
              width: '80%'
            }}
          >
            <Typography variant="body1" align="justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat
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
            alignItems: 'center'
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
              height: '20rem'
            }}
          ></div>
          <div
            style={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              height: '20rem',
              backgroundImage:
                'radial-gradient(farthest-corner at 50% 50%, #83D4ED 15%, #EBEAE8 70%)'
            }}
          ></div>
        </Grid>
      </Grid>
    </>
  );
}
