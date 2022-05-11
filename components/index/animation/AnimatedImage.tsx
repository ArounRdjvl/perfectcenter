import { makeStyles, useTheme } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

export interface AnimatedImageProps {
  url: string
  position: { x: any; y: any }
  width: any
  rotation?: number
  mirror?: boolean
  delay?: number
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
  },
}))

export function AnimatedImage(props: AnimatedImageProps) {
  const classes = useStyles(useTheme())

  const rotation = props.rotation ? props.rotation : 0

  const mirror = props.mirror ? 'scaleY(-1)' : ''
  const delay = props.delay ? props.delay : 3000

  const [springProps] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay,
    config: {
      tension: 113,
      friction: 103,
    },
  }))

  return (
    <animated.div
      className={classes.root}
      style={{
        left: props.position.x,
        top: props.position.y,
        opacity: springProps.opacity,
        width: props.width,
        height: props.width,
        transform: `rotate(${rotation}deg) ${mirror}`,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${props.url})`,
        backgroundPosition: 'center',
        backgroundSize: '80%',
      }}
    />
  )
}
