import React from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { IconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  navButton: {
    outline: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    touchAction: 'manipulation',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    border: 0,
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  prev: {
    left: 0,
  },
  next: {
    right: 0,
  },
}))

export interface NavigationButtonProps {
  onClick: any
  left: boolean
}

export function CarouselButton(props: NavigationButtonProps) {
  const classes = useStyles()
  const { left } = props
  if (left) {
    return (
      <IconButton
        color="primary"
        className={clsx(classes.navButton, classes.prev)}
        onClick={props.onClick}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
    )
  }
  return (
    <IconButton
      color="primary"
      className={clsx(classes.navButton, classes.next)}
      onClick={props.onClick}
    >
      <NavigateNextIcon fontSize="large" />
    </IconButton>
  )
}
