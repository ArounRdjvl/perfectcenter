import { useMediaQuery, useTheme } from '@material-ui/core'
import React, { ReactNode, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay'
import AutoHeight, { AutoHeightOptionsType } from 'embla-carousel-auto-height'
import { CarouselButton } from './CarouselButton'

export interface CarouselProps {
  options?: EmblaOptionsType
  autoplay?: AutoplayOptionsType
  autoheight?: AutoHeightOptionsType
  slides: ReactNode[]
}

export function Carousel(props: CarouselProps) {
  const { options, autoplay, autoheight, slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplay),
    AutoHeight(autoheight),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <div
          ref={emblaRef}
          style={{
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              userSelect: 'none',
              transition: 'height 0.2s',
              alignItems: 'flex-start',
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  minWidth: '100%',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '0 auto',
                    width: '80%',
                    borderRadius: '35px',
                  }}
                >
                  {slide}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <div
        ref={emblaRef}
        style={{
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            userSelect: 'none',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                minWidth: '100%',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '0 auto',
                  width: '40rem',
                  borderRadius: '35px',
                }}
              >
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CarouselButton onClick={scrollPrev} left />
      <CarouselButton onClick={scrollNext} left={false} />
    </div>
  )
}
