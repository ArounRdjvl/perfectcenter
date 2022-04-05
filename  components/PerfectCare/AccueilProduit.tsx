import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Divider } from '../Divider';
import { colors } from '../../modules/theme';
import { TitleBar } from ' components/TitleBar';

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  floating: {
    animationName: 'floating',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  }
}));

export interface ProductProps {
  title: string;
  path: string;
}

export function AccueilProduit(props: ProductProps) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile) {
    return <></>;
  }
  return (
    <>
      <div className={classes.root}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignContent: 'center'
            }}
          >
            <TitleBar title={props.title} background={true} color="vert" padding="0 0 3vh 0" />
          </div>
          <div className={classes.floating}>
            <img src={props.path} style={{ width: '25vw', maxWidth: '40rem', minWidth: '20rem' }} />
          </div>
        </div>
      </div>
    </>
  );
}
