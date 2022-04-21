import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import { colors } from 'modules/theme'
import { dataCoachs } from 'modules/data'

export function PraticiensCarousel() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobile) {
    return (
      <div style={{ width: '60vw', minWidth: '23rem', height: '100%' }}>
        <Carousel
          pagination={false}
          isRTL={false}
          enableSwipe
          enableAutoPlay
          autoPlaySpeed={10000}
          showArrows={false}
        >
          {dataCoachs.map((coach) => (
            <div
              key={coach.name}
              style={{
                position: 'relative',
                width: '100%',
                height: '50vw',
                minHeight: '18rem',
                float: 'left',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '90%',
                }}
              >
                <img src={coach.photo} width="100%" style={{ zIndex: 2 }} />
              </div>
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '90%',
                  background: 'linear-gradient(transparent, 85%, #3B424A)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    display: 'flex',
                    padding: '0.5rem 1rem',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography variant="h3" color="textSecondary">
                    {coach.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {coach.practice1}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
  return (
    <div style={{ width: '100%', height: '100%', marginRight: '2rem' }}>
      <Carousel
        pagination={false}
        isRTL={false}
        enableSwipe
        enableAutoPlay
        autoPlaySpeed={10000}
      >
        {dataCoachs.map((coach) => (
          <div
            key={coach.name}
            style={{
              position: 'relative',
              width: '100%',
              maxHeight: '30vw',
              height: '30rem',
              maxWidth: '40rem',
              float: 'left',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: colors.vert,
            }}
          >
            <div
              style={{
                position: 'absolute',
                height: '100%',
                width: '85%',
                backgroundImage: `url(${coach.photo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%',
              }}
            />
            <div
              style={{
                position: 'relative',
                height: '100%',
                width: '85%',
                background: 'linear-gradient(transparent, 85%, #3B424A)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  display: 'flex',
                  padding: '0.5rem 1rem',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography variant="h2" color="textSecondary">
                  {coach.name}
                </Typography>
                <Typography variant="h3" color="textSecondary">
                  {coach.practice1}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
