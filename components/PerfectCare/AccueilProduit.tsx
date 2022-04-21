import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { TitleBar } from 'components/TitleBar'

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
          <img src={props.path} style={{ width: '25vw', maxWidth: '40rem', minWidth: '20rem' }} />
        </div>
      </div>
    </div>
  )
}
