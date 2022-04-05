import { Link, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import { colors } from '../modules/theme';
import { dataCoachs } from '../modules/data';

export function MyCarrousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <>
        <div style={{ width: '100%', height: '100%' }}>
          <Carousel
            pagination={false}
            isRTL={false}
            enableSwipe={true}
            enableAutoPlay={true}
            autoPlaySpeed={10000}
            showArrows={false}
          >
            {dataCoachs.map((Coach) => (
              <div
                style={{
                  position: 'relative',
                  width: '30rem',
                  height: '20rem',
                  float: 'left',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    height: '20rem',
                    width: '20rem',
                    backgroundImage: `url(${Coach.photo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                    borderRadius: '35px'
                  }}
                ></div>
                <div
                  style={{
                    position: 'relative',
                    height: '100%',
                    width: '20rem',
                    background: 'linear-gradient(transparent, 85%, #3B424A)',
                    borderRadius: '35px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      display: 'flex',
                      padding: '1rem 1.5rem',
                      flexDirection: 'column',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <Typography variant="h3" color="textSecondary">
                      {Coach.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {Coach.practice1}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Carousel
          pagination={false}
          isRTL={false}
          enableSwipe={true}
          enableAutoPlay={true}
          autoPlaySpeed={10000}
        >
          {dataCoachs.map((Coach) => (
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxHeight: '30vw',
                minHeight: '25rem',
                height: '30rem',
                maxWidth: '40rem',
                float: 'left',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '85%',
                  backgroundImage: `url(${Coach.photo})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100%',
                  borderRadius: '35px'
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '85%',
                  background: 'linear-gradient(transparent, 85%, #3B424A)',
                  borderRadius: '35px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    display: 'flex',
                    padding: '1rem 1.5rem',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Typography variant="h2" color="textSecondary">
                    {Coach.name}
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    {Coach.practice1}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
