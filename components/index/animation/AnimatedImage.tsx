import { makeStyles, useTheme } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

export interface AnimatedImageProps {
  url: string
  position?: { x: any; y: any }
  center?: boolean
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

  const x = props.position?.x ? props.position.x : 0
  const y = props.position?.y ? props.position.y : 0

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

  if (props.center) {
    return (
      <animated.div
        className={classes.root}
        style={{
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          top: '65vh',
          opacity: springProps.opacity,
          width: props.width,
          transform: `rotate(${rotation}deg) ${mirror}`,
        }}
      >
        <img
          src={props.url}
          draggable="false"
          referrerPolicy="no-referrer"
          unselectable="on"
          style={{ width: '100%' }}
        />
      </animated.div>
    )
  }

  return (
    <animated.div
      className={classes.root}
      style={{
        left: x,
        top: y,
        opacity: springProps.opacity,
        width: props.width,
        transform: `rotate(${rotation}deg) ${mirror}`,
      }}
    >
      <img
        src={props.url}
        draggable="false"
        referrerPolicy="no-referrer"
        unselectable="on"
        style={{ width: '100%' }}
      />
    </animated.div>
  )
}
