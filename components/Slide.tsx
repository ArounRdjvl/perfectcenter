import { Typography, useMediaQuery, useTheme } from '@material-ui/core'

export interface SlideProps {
  redirect?: string
  src: string
  alt: string
  title: string
  subtitle?: string
}

export function Slide(props: SlideProps) {
  const { src, redirect, alt, title, subtitle } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <a href={redirect} style={redirect === "" ? { pointerEvents: "none", cursor: "default" } : {}} >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'flex',
          padding: '1rem 1.5rem',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          background: 'linear-gradient(transparent, 35%, #404040)',
        }
        }
      >
        <Typography variant={isMobile ? "h3" : "h2"} color="textSecondary">
          {title}
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"} color="textSecondary">
          {subtitle}
        </Typography>
      </div >
    </a>
  )
}
