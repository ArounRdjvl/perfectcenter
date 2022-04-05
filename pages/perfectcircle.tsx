import React from 'react';
import Head from 'next/head';
import { Navigation } from '../ components/Navigation';
import { Divider } from '../ components/Divider';
import { Background } from '../ components/Background';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles
} from '@material-ui/core';
import { Footer } from '../ components/Footer';
import { TitleBar } from '../ components/TitleBar';
import { Coach } from '../ components/PerfectCircle/Coach';
import CSS from 'csstype';
import { CoachProps } from '../ components/PerfectCircle/Coach';
import { dataCoachs } from '../modules/data';
import clsx from 'clsx';
import { WelcomePerfectCircle } from ' components/PerfectCircle/WelcomePerfectCircle';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      paddingBottom: '2rem',
      height: '100%',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingBottom: '9rem'
      },
      margin: 'auto'
    },
    image: {
      borderRadius: 20,
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      width: '10rem',
      zIndex: 2
    },
    imageMobile: {
      bottom: 0,
      left: '1rem'
    },
    greenDiv: {
      borderRadius: 20,
      position: 'absolute',
      backgroundColor: '#849994',
      bottom: 0,
      right: 0,
      width: '70%',
      height: '10rem',
      zIndex: 0,
      padding: '0.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    greenDivMobile: {
      left: '10rem',
      bottom: '1rem',
      paddingLeft: '2rem',
      width: 'auto',
      right: '2rem',
      height: 'auto',
      paddingTop: '2rem'
    }
  };
});

export default function perfectcircle() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ref = React.useRef<HTMLDivElement>(null);

  const itemStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  };

  const imageHandleStyle: CSS.Properties = {
    flexGrow: 1,
    display: 'flex',
    width: '7rem',
    height: '7rem'
  };

  return (
    <div ref={ref}>
      <Head>
        <title>PerfectCircle</title>
      </Head>
      <Navigation />

      <WelcomePerfectCircle />

      <Container>
        <TitleBar title="Nos praticiens" color="vert" padding="2rem 0 2rem 0" />
      </Container>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1rem 10vw',
          alignContent: 'flex-start',
          justifyContent: 'space-evenly'
        }}
      >
        {dataCoachs.map((coach, i) => {
          const pair = i % 2 == 0;
          return <Coach user={coach} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
