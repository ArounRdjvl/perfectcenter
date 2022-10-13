import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { colors } from 'modules/theme'

export interface BulleInfoProps {
  titre?: string
  size: string
  photoUrl: string
  photoSize: string
}

export function BulleInfo(props: BulleInfoProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const getContenu = (   ()=> {
    if (props?.titre) {
      return (
        <Typography variant={isMobile ? "body2" : "body1"} align="center" style={{ marginTop: '2rem' }}>
          {props?.titre}
        </Typography>
      )
    }
    return null
    }
  )

  return (
    <div
      style={{
        width: props.size,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: isMobile ? '0.5rem' : '2rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: colors.vert,
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${props.photoUrl})`,
          backgroundPosition: '50% 50%',
          backgroundSize: props.photoSize,
          width: props.size,
          height: props.size,
          borderRadius: '50%',
          boxShadow: '0px 0px 25px #777777',
        }}
      />
       {getContenu()}
    </div>
  )
}
