import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { colors } from '../modules/theme'

const iconSize = 100

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
  iconUrl?: string
  color?: string
}

export interface TileProps extends StyleProps {
  title: string
  textColor?: 'textPrimary' | 'textSecondary'
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  outerIcon: (props) => ({
    position: 'absolute',
    width: iconSize,
    height: iconSize,
    positon: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    border: `2px solid ${props.color ?? colors.vert}`,
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'red',
  }),
  icon: (props) => ({
    backgroundImage: `url('${props.iconUrl}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '100%',
    width: '100%',
  }),
  root: {
    position: 'relative',
    transition: 'filter 0.2',
    filter: 'drop-shadow(0 0 25px #BBB)',
    textAlign: 'center',
  },

  content: (props) => ({
    paddingTop: props.iconUrl ? iconSize * 0.4 : '1rem',
    padding: '1rem',
    backgroundColor: props.color ?? colors.vert,
    borderRadius: '30px',
    height: '100%',
  }),
  childContent: {
    padding: '1rem 0',
  },
  title: {
    paddingTop: theme.spacing(1),
    textAlign: 'center',
  },
  padding: (props) => ({
    paddingTop: (props.iconUrl ? iconSize : 0) * 0.6,
    height: '100%',
  }),
}))

export function PerfectTile({
  iconUrl,
  title,
  children,
  style,
  className,
  color,
  textColor,
}: TileProps) {
  const classes = useStyles({ iconUrl, color })

  return (
    <div className={clsx(classes.root, className)} style={style}>
      {!!iconUrl && (
        <div className={classes.outerIcon}>
          <div className={classes.icon} />
        </div>
      )}
      <div className={classes.padding}>
        <div className={classes.content}>
          <Typography className={classes.title} color={textColor ?? 'textSecondary'} variant="h3">
            {title}
          </Typography>
          <div className={classes.childContent}>{children}</div>
        </div>
      </div>
    </div>
  )
}
