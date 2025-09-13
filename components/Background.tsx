import React from 'react'
import { styled } from '@mui/material/styles'
import { heightHeader } from './Navigation'

interface BackgroundProps {
  elRef: any
}

const pictoSize = '7%'
const groupHeight = '100vh'

const PictoRoot = styled('div')({
  position: 'absolute',
  left: 0,
  top: heightHeader,
  width: '100%',
  overflow: 'hidden',
})
const PictoGroup = styled('div')({
  position: 'relative',
  width: '100%',
  height: groupHeight,
})
const PictoLeft = styled('img')({
  position: 'absolute',
  left: 0,
  width: pictoSize,
})
const PictoRight = styled('img')({
  position: 'absolute',
  right: 0,
  top: '50vh',
  width: pictoSize,
})

export function Background(props: BackgroundProps) {
  const [groupNumber, setGroupNumber] = React.useState<number>(0)
  const [height, setHeight] = React.useState<number>(0)

  React.useEffect(() => {
    // seems ok to do it like that
    if (props.elRef?.current) {
      const ratio = props.elRef.current.scrollHeight / window.innerHeight
      setGroupNumber(Math.ceil(ratio))
      setHeight(props.elRef.current.scrollHeight - heightHeader)
    }
  }, [props.elRef])

  const groups = []

  for (let i = 0; i < groupNumber; i++) {
    groups.push(
      <PictoGroup key={i}>
        <PictoLeft src="picto/background_left.png" />
        <PictoRight src="picto/background_right.png" />
      </PictoGroup>,
    )
  }

  return <PictoRoot style={{ height }}>{groups}</PictoRoot>
}
