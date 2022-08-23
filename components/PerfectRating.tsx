import { makeStyles, Theme, Typography } from '@material-ui/core'
import { colors } from 'modules/theme'
import clsx from 'clsx'
import React from 'react'

// taille en pixel du cercle
const size = 150

// largeur en pixel du cercle
const padding = 30

const half = size / 2
const smallCircleDistance = half - padding / 2

type ThemePerfectRating = {
  value: number
  primaryColor: string
  secondaryColor: string
}

export interface PerfectRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  title?: string
}

export const useStyles = makeStyles<Theme, ThemePerfectRating>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  outerCircle: (props) => ({
    background: `conic-gradient(${props.primaryColor} ${props.value}turn, ${props.secondaryColor} ${props.value}turn 1turn)`,
    height: size,
    width: size,
    padding: padding,
    borderRadius: '50%',
    position: 'relative',
    filter: 'drop-shadow(0 0 25px #BBB)',
  }),
  innerCircle: {
    background: theme.palette.background.default,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    display: 'flex',
    boxShadow: 'inset 0 0 25px #BBB',
  },
  typo: {
    fontWeight: 'bold',
    fontSize: '1.8em',
    margin: 'auto',
  },
  smallCircle: (props) => ({
    width: padding,
    height: padding,
    background: props.primaryColor,
    position: 'absolute',
    borderRadius: '50%',
  }),
  // first small circle is always at the same position
  start: {
    top: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  // end circle position has to be calculated to match the conic-gradient background
  end: (props) => ({
    bottom: Math.cos(props.value * 2 * Math.PI) * smallCircleDistance + half,
    left: Math.sin(props.value * 2 * Math.PI) * smallCircleDistance + half,
    transform: 'translate(-50%, 50%)',
  }),
}))

function formatValue({ value, max }: PerfectRatingProps) {
  if (max) return `${value}/${max}`
  return `${value * 100}%`
}

export default function PerfectRating({ value, max, title, style, className }: PerfectRatingProps) {
  const classes = useStyles({
    value: value / (max ?? 1),
    primaryColor: colors.vert,
    secondaryColor: colors.beige,
  })

  return (
    <div className={clsx(className, classes.root)} style={style}>
      <div className={classes.outerCircle}>
        <div className={classes.innerCircle}>
          <Typography className={classes.typo}>{formatValue({ value, max })}</Typography>
        </div>
        <div className={clsx(classes.start, classes.smallCircle)} />
        <div className={clsx(classes.end, classes.smallCircle)} />
      </div>
      {!!title && <Typography variant="h3">{title}</Typography>}
    </div>
  )
}
