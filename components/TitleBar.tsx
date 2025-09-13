import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Divider } from './Divider'
import React from 'react'
import { colors } from '../modules/theme'

export interface TitleProps {
  title?: string
  background?: boolean
  color: 'beige' | 'noir' | 'vert'
  paddingMobile?: string
  padding?: string
  justifyContent?: string
}

export function TitleBar(props: TitleProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    return (
      <>
        <div
          style={{
            padding: props.paddingMobile ? `${props.paddingMobile}` : '1rem 0 0 1rem',
            width: '100%',
            display: 'flex',
            justifyContent: props.justifyContent ? `${props.justifyContent}` : 'flex-start',
          }}
        >
          <div
            style={{
              position: 'relative',
            }}
          >
            <Typography variant="h2" align="center">
              {props.title}
            </Typography>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Divider color={props.color} />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      style={{
        padding: props.padding ? `${props.padding}` : '1rem 0 0 2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <Typography variant="h1" align="center">
          {props.title}
        </Typography>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Divider color={props.color} />
        </div>
      </div>
    </div>
  )
}
