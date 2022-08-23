import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { colors } from 'modules/theme'
import clsx from 'clsx'

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
  iconPosition: 'left' | 'right'
  iconUrl: string
}

export interface IconTitleContentProps extends StyleProps {
  title: string
  textContent?: string
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    position: 'relative',
    filter: 'drop-shadow(0 0 25px #BBB)',
  },
  outerIcon: {
    padding: '1rem',
    backgroundColor: colors.vert,
    height: 150,
    width: 150,
    borderRadius: '30px',
    margin: 'auto',
    boxShadow: '0 0 25px #BBB',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
    },
  },
  innerIcon: (props) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url('${props.iconUrl}')`,
    height: '100%',
    width: '100%',
  }),
  outerTitle: {
    padding: '3rem 0 2rem 0',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0 1rem 0',
    },
  },
  title: {
    backgroundColor: colors.beige,
    borderRadius: '30px',
    padding: theme.spacing(1),
    color: colors.noir,
    // boxShadow: '0 0 25px #BBB',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  content: {
    whiteSpace: 'pre-line',
    color: colors.noir,
  },
  padding: (props) => ({
    paddingLeft: props.iconPosition === 'left' ? '12rem' : '2rem',
    paddingRight: props.iconPosition === 'left' ? '2rem' : '12rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  }),
}))

export function PerfectIconTitleContent({
  iconUrl,
  title,
  textContent,
  children,
  iconPosition,
  style,
  className,
}: IconTitleContentProps) {
  const classes = useStyles({ iconPosition, iconUrl })

  return (
    <div className={clsx(classes.root, className)} style={style}>
      <div className={classes.outerIcon} style={{ [iconPosition]: 0, top: 0 }}>
        <div className={classes.innerIcon} />
      </div>
      <div>
        <div className={classes.outerTitle}>
          <Typography variant="h2" className={clsx(classes.title, classes.padding)}>
            {title}
          </Typography>
        </div>
        <div className={classes.padding}>
          {textContent ? (
            <Typography className={classes.content}>{textContent}</Typography>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  )
}
