import React from 'react'
import { Grid, useTheme, Typography, useMediaQuery, makeStyles } from '@material-ui/core'
import { Divider } from './Divider'
import { colors } from '../modules/theme'

export interface UserProps {
  photo?: string
  name?: string
  poste?: string
  desc?: string
  facebook?: string
  linkedin?: string
  instagram?: string
}

export interface MembreProps {
  pair?: boolean
  user?: UserProps
}

export function Membre(props: MembreProps) {
  const theme = useTheme()
  const pair = props.pair
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  if (isMobile) {
    if (!pair) {
      return (
        <>
          <Grid
            justify="center"
            direction="column"
            container
            style={{
              marginTop: '3rem',
            }}
          >
            <Grid
              xs={12}
              style={{
                position: 'relative',
                zIndex: 3,
              }}
              item
            >
              <div
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: colors.beige,
                  borderRadius: '20px 20px 0 0',
                  height: '10rem',
                  width: '14rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    maxWidth: '50px',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                  }}
                >
                  <a
                    href={props.user?.facebook}
                    target="_blank"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <img
                      src="picto/Facebook_fonce.png"
                      width={45}
                      style={{
                        zIndex: 2,
                      }}
                    />
                  </a>
                  <a
                    href={props.user?.instagram}
                    target="_blank"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <img
                      src="picto/Instagram_fonce.png"
                      width={45}
                      style={{
                        zIndex: 2,
                      }}
                    />
                  </a>
                  <a
                    href={props.user?.linkedin}
                    target="_blank"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <img
                      src="picto/Linkedin_fonce.png"
                      width={45}
                      style={{
                        zIndex: 2,
                      }}
                    />
                  </a>
                </div>

                <div
                  style={{
                    position: 'relative',
                  }}
                >
                  <img
                    style={{
                      maxHeight: '10rem',
                      borderRadius: '0 20px 0 0',
                    }}
                    alt={props.user?.name}
                    src={props.user?.photo}
                  />
                </div>
              </div>
            </Grid>
            <Grid
              xs={12}
              style={{
                position: 'relative',
                minWidth: '16rem',
              }}
              item
            >
              <div
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '3rem',
                  width: '100%',
                  borderRadius: '20px',
                  top: 0,
                }}
              >
                <Typography variant="h3" align="center" color="textSecondary">
                  {props.user?.name}
                </Typography>
              </div>
              <div
                style={{
                  padding: '1rem 2rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Typography variant="h4" align="center">
                  {props.user?.poste}
                </Typography>
                <Typography variant="body2" align="justify" style={{ marginTop: '1.2rem' }}>
                  {props.user?.desc}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </>
      )
    }
    return (
      <>
        <Grid
          justify="center"
          container
          direction="column"
          style={{
            marginTop: '3rem',
          }}
        >
          <Grid
            xs={12}
            style={{
              position: 'relative',
              zIndex: 3,
            }}
            item
          >
            <div
              style={{
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: theme.palette.secondary.main,
                borderRadius: '20px 20px 0 0',
                height: '10rem',
                width: '14rem',
              }}
            >
              <div
                style={{
                  position: 'relative',
                }}
              >
                <img
                  style={{
                    maxHeight: '10rem',
                    borderRadius: '20px 0 0 0',
                  }}
                  alt={props.user?.name}
                  src={props.user?.photo}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  maxWidth: '70px',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <a
                  href={props.user?.facebook}
                  target="_blank"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <img
                    src="picto/Facebook_clair.png"
                    width={45}
                    style={{
                      zIndex: 2,
                    }}
                  />
                </a>
                <a
                  href={props.user?.instagram}
                  target="_blank"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <img
                    src="picto/Instagram_clair.png"
                    width={45}
                    style={{
                      zIndex: 2,
                    }}
                  />
                </a>
                <a
                  href={props.user?.linkedin}
                  target="_blank"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <img
                    src="picto/Linkedin_clair.png"
                    width={45}
                    style={{
                      zIndex: 2,
                    }}
                  />
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            style={{
              position: 'relative',
              minWidth: '16rem',
            }}
            item
          >
            <div
              style={{
                backgroundColor: colors.beige,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '3rem',
                width: '100%',
                borderRadius: '20px',
                top: 0,
              }}
            >
              <Typography variant="h3" align="center">
                {props.user?.name}
              </Typography>
            </div>
            <div
              style={{
                padding: '1rem 2rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Typography variant="h4" align="center">
                {props.user?.poste}
              </Typography>
              <Typography variant="body2" align="justify" style={{ marginTop: '1.2rem' }}>
                {props.user?.desc}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
  if (!pair) {
    return (
      <>
        <Grid
          justify="flex-start"
          container
          style={{
            padding: '3rem 0 1rem 0',
            marginLeft: '-1rem',
          }}
        >
          <Grid
            xs={3}
            style={{
              position: 'relative',
              zIndex: 3,
            }}
            item
          >
            <div
              style={{
                right: 0,
                top: 0,
                marginRight: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                paddingLeft: '0.8rem',
                backgroundColor: colors.beige,
                position: 'absolute',
                height: '12rem',
                width: '13rem',
                borderRadius: '20px',
              }}
            >
              <a href={props.user?.facebook} target="_blank">
                <img
                  src="picto/Facebook_fonce.png"
                  width={40}
                  style={{
                    zIndex: 2,
                  }}
                />
              </a>
              <a href={props.user?.instagram} target="_blank">
                <img
                  src="picto/Instagram_fonce.png"
                  width={40}
                  style={{
                    zIndex: 2,
                  }}
                />
              </a>
              <a href={props.user?.linkedin} target="_blank">
                <img
                  src="picto/Linkedin_fonce.png"
                  width={40}
                  style={{
                    zIndex: 2,
                  }}
                />
              </a>
            </div>

            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: 0,
              }}
            >
              <img
                style={{
                  maxWidth: '11rem',
                  borderRadius: '20px',
                }}
                alt={props.user?.name}
                src={props.user?.photo}
              />
            </div>
          </Grid>
          <Grid
            xs={8}
            style={{
              position: 'relative',
              paddingTop: '2rem',
            }}
            item
          >
            <div
              style={{
                backgroundColor: theme.palette.secondary.main,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '3rem',
                width: '100%',
                right: 0,
                top: 0,
                borderRadius: '0 30px 30px 0',
              }}
            >
              <Typography variant="h2" align="center" color="textSecondary">
                {props.user?.name}
              </Typography>
            </div>
            <div
              style={{
                padding: '1rem 4rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Typography variant="h3" align="center">
                {props.user?.poste}
              </Typography>
              <Typography variant="body1" align="justify" style={{ marginTop: '1.2rem' }}>
                {props.user?.desc}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
  return (
    <>
      <Grid
        justify="flex-end"
        container
        style={{
          padding: '3rem 0 1rem 0',
          marginLeft: '1rem',
        }}
      >
        <Grid
          xs={8}
          style={{
            position: 'relative',
            paddingTop: '3rem',
          }}
          item
        >
          <div
            style={{
              backgroundColor: colors.beige,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '3rem',
              width: '100%',
              right: 0,
              top: 0,
              borderRadius: '30px 0 0 30px ',
            }}
          >
            <Typography variant="h2" align="center">
              {props.user?.name}
            </Typography>
          </div>
          <div
            style={{
              padding: '1rem 4rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography variant="h3" align="center">
              {props.user?.poste}
            </Typography>
            <Typography variant="body1" align="justify" style={{ marginTop: '1.2rem' }}>
              {props.user?.desc}
            </Typography>
          </div>
        </Grid>
        <Grid
          xs={3}
          style={{
            position: 'relative',
            zIndex: 3,
          }}
          item
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              paddingRight: '0.8rem',
              backgroundColor: theme.palette.secondary.main,
              position: 'absolute',
              height: '12rem',
              width: '13rem',
              left: 0,
              marginLeft: '2rem',
              borderRadius: '20px',
            }}
          >
            <a href={props.user?.facebook} target="_blank">
              <img
                src="picto/Facebook_clair.png"
                width={40}
                style={{
                  zIndex: 2,
                }}
              />
            </a>
            <a href={props.user?.instagram} target="_blank">
              <img
                src="picto/Instagram_clair.png"
                width={40}
                style={{
                  zIndex: 2,
                }}
              />
            </a>
            <a href={props.user?.linkedin} target="_blank">
              <img
                src="picto/Linkedin_clair.png"
                width={40}
                style={{
                  zIndex: 2,
                }}
              />
            </a>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: 0,
            }}
          >
            <img
              style={{
                maxWidth: '11rem',
                borderRadius: '20px',
              }}
              alt={props.user?.name}
              src={props.user?.photo}
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
