import { makeStyles, useMediaQuery, useTheme} from '@material-ui/core'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { colors } from 'modules/theme'

const useStyles = makeStyles(() => ({
  root: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  floating: {
    animationName: 'floating',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  bulle: {
    position: 'absolute',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 25px #BBBBBB',
  },
  img: {
    position: 'relative',
    left: 0,
    height: '8rem',
    width: '8rem',
  },
}))

export interface ProductProps {
  title: string
  path: string
}

export function AccueilProduit(props: ProductProps) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return null
  }
  return (
    <div className={classes.root}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <TitleBar title={props.title} color="vert" padding="0 0 3vh 0" />
        </div>
        <div className={classes.floating}>
          <div
            style={{
              position: 'relative',
              width: '32rem',
              height: '35rem',
            }}
          >
            <div
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                top: '-10px',
                right: '-90px',
                background: colors.beige,
              }}
            >
            <div className={classes.img}
                style={{
                  zIndex: 3
                }}
              />
            </div>
            <div
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                bottom: '40px',
                right: '20px',
                background: colors.beige,
              }}
            >
              <div
                className={classes.img} />
            </div>
            <div
              className={classes.bulle}
              style={{
                zIndex: 2,
                width: '11.5rem',
                height: '11.5rem',
                float: 'left',
                top: '150px',
                left: '-55px',
                background: colors.beige,
              }}
            >
              <div className={classes.img}/>
            </div>
            <div
              className={classes.bulle}
              style={{
                backgroundImage: `url(${props.path})`,
                backgroundSize: '65%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 2,
                width: '20rem',
                height: '20rem',
                bottom: '150px',
                right: '65px',
                backgroundColor: colors.vert,
              }}
             />
             <div
              className={classes.bulle}
              style={{
                width: '6rem',
                height: '6rem',
                top: '0',
                left: '140px',
                backgroundColor: colors.vert
              }}
            />
            <div
              className={classes.bulle}
              style={{
                width: '6rem',
                height: '6rem',
                bottom: '50px',
                left: '80px',
                backgroundColor: colors.vert,
              }}
            />
            <div
              className={classes.bulle}
              style={{
                width: '5rem',
                height: '5rem',
                top: '155px',
                right: '-60px',
                borderRadius: '100%',
                backgroundColor: colors.vert,
                boxShadow: '0px 0px 25px #BBBBBB',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
