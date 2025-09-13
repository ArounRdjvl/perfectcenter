import React from 'react'
import { useTheme, Typography } from '@mui/material'

export interface UserProps {
  photo?: string
  name?: string
  practice1?: string
  practice2?: string
}

export interface CoachProps {
  pair?: boolean
  user?: UserProps
}

const boxMouseOverHandlerVert = (event: React.MouseEvent<HTMLDivElement>) => {
  const box: HTMLDivElement = event.currentTarget
  box.style.backgroundColor = '#BFC7C4'
  box.style.transitionDuration = '500ms'
}

// This function will be triggered when the mouse pointer is moving out the box
const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  const box: HTMLDivElement = event.currentTarget
  box.style.backgroundColor = '#EBEAE8'
}

export function Coach(props: CoachProps) {
  const theme = useTheme()
  const pair = props.pair

  if (pair) {
    return (
      <>
        <div
          onMouseOver={boxMouseOverHandlerVert}
          onMouseLeave={boxMouseOutHandler}
          style={{
            width: '19rem',
            height: '28rem',
            borderRadius: '35px',
            display: 'flex',
            margin: '0.5rem',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '5rem',
              display: 'flex',
              alignItems: 'center',
              padding: '0rem 1rem',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant="h3" align="center">
              {props.user?.name}
            </Typography>
          </div>
          <img
            style={{
              height: '17rem',
              display: 'flex',
              borderRadius: '15px',
              zIndex: 2,
              borderRightColor: '#849994',
            }}
            alt={props.user?.name}
            src={props.user?.photo}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Typography align="center" style={{ position: 'relative', top: '3px' }}>
              {props.user?.practice1}
            </Typography>
            <Typography align="center" style={{ position: 'relative', top: '5px' }}>
              {props.user?.practice2}
            </Typography>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div
        onMouseOver={boxMouseOverHandlerVert}
        onMouseLeave={boxMouseOutHandler}
        style={{
          width: '19rem',
          height: '28rem',
          borderRadius: '35px',
          margin: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 20,
            width: '100%',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
            padding: '0rem 1rem',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <Typography variant="h3" align="center">
            {props.user?.name}
          </Typography>
        </div>
        <img
          style={{
            height: '17rem',
            display: 'flex',
            borderRadius: '15px',
            zIndex: 2,
          }}
          alt={props.user?.name}
          src={props.user?.photo}
        />
        <div
          style={{
            position: 'relative',
            width: '100%',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <Typography align="center" style={{ position: 'relative', top: '5px' }}>
            {props.user?.practice1}
          </Typography>
          <Typography align="center" style={{ position: 'relative', top: '5px' }}>
            {props.user?.practice2}
          </Typography>
        </div>
      </div>
    </>
  )
}
