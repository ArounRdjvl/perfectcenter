import React from 'react'
import { Button, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Link from 'next/link'

export interface ProductProps {
  name: string
  desc?: JSX.Element
  link: string
  linkPhoto: string
  prix?: string
  moreAboutLink?: string
}

export interface DisplayProps {
  product: ProductProps
}

const boxMouseOverHandler = (
  event: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>
) => {
  const box: HTMLDivElement = event.currentTarget
  const fond = event.currentTarget.getElementsByClassName('fond').item(0)! as HTMLDivElement
  fond.style.backgroundImage =
    'radial-gradient(farthest-corner at 50% 100%, #849994 35%, #AFB9B7 65%)'
  const image = event.currentTarget.getElementsByClassName('image').item(0)! as HTMLDivElement
  image.style.marginTop = '-2.5rem'
  box.style.backgroundColor = '#BFC7C4'
  box.style.boxShadow = '0px 0px 50px #999999'
  box.style.transitionDuration = '500ms'
  image.style.transitionDuration = '500ms'
}

// This function will be triggered when the mouse pointer is moving out the box
const boxMouseOutHandler = (
  event: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>
) => {
  const box: HTMLDivElement = event.currentTarget
  const fond = event.currentTarget.getElementsByClassName('fond').item(0)! as HTMLDivElement
  fond.style.backgroundImage =
    'radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)'
  const image = event.currentTarget.getElementsByClassName('image').item(0)! as HTMLDivElement
  image.style.marginTop = '1rem'
  box.style.boxShadow = '0px 0px 25px #BBBBBB'
  box.style.backgroundColor = '#EBEAE8'
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    borderRadius: '20px',
    width: '20rem',
    height: '28rem',
    margin: '1.5rem',
  },
  rootPhone: {
    position: 'relative',
    borderRadius: '20px',
    width: '19rem',
    height: '28rem',
    margin: '1rem',
  },
}))

export function Product(props: DisplayProps) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const getContenu = (   ()=> {
    if (props.product?.desc) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
            padding: '0rem 1.5rem 0.5rem 1.5rem',
            overflow: 'hidden',
          }}
        >
          <Typography align="justify" style={{fontSize: '13.5px' }}>
            {props.product?.desc}
          </Typography>
        </div>
      )
    }
    if (props.product?.prix) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            zIndex: 2,
          }}
        >
          <Typography align="center" variant='h2'style={{position:'absolute', bottom: '0px', marginBottom: '7rem'}}>
            {props.product?.prix}
          </Typography>
          <Link href="/produits" style={{ marginTop: '1rem' }}>
            <Button variant="contained" color="secondary" size="large" style={{position:'absolute', bottom: '0px', marginBottom: '1rem'}}>
              Voir le produit
            </Button>
          </Link>
        </div>
        
      )
    }
    return null
    }
  )
  if (isMobile) {
    return (
      <Link href={props.product?.link}>
        <div
          className={classes.rootPhone}
          style={{
            boxShadow: '0px 0px 25px #BBBBBB',
            cursor: 'pointer',
          }}
        >
          <div
            className="fond"
            style={{
              position: 'relative',
              display: 'flex',
              width: '100%',
              height: '11rem',
              borderRadius: '20px 20px 0 0',
              justifyContent: 'center',
              backgroundImage:
                'radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)',
            }}
          >
            <img
              className="image"
              alt={props.product?.name}
              src= {props.product?.linkPhoto}
              width={225}
              style={{
                position: 'absolute',
                zIndex: 1,
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              width: '100%',
              zIndex: 2,
              height: '17rem',
              bottom: 0,
              borderRadius: '0 0 20px 20px',
              backgroundColor: '#EBEAE8',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 2,
                margin: '1rem 0 0.7rem 0',
              }}
            >
              <Typography variant="h3" style={{ alignSelf: 'center' }}>
                {props.product?.name}
              </Typography>
            </div>
            {getContenu()}
          </div>
        </div>
      </Link>
    )
  }
  return (
    <Link href={props.product?.link}>
      <div
        onMouseOver={boxMouseOverHandler}
        onMouseLeave={boxMouseOutHandler}
        onFocus={boxMouseOverHandler}
        onBlur={boxMouseOutHandler}
        className={classes.root}
        style={{
          boxShadow: '0px 0px 25px #BBBBBB',
          cursor: 'pointer',
        }}
      >
        <div
          className="fond"
          style={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '11rem',
            borderRadius: '20px 20px 0 0',
            justifyContent: 'center',
            backgroundImage:
              'radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)',
          }}
        >
          <img
            className="image"
            alt={props.product?.name}
            src={props.product?.linkPhoto}
            width={225}
            style={{
              position: 'absolute',
              zIndex: 1,
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 2,
            height: '17rem',
            bottom: 0,
            borderRadius: '0 0 20px 20px',
            backgroundColor: '#EBEAE8',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2,
              margin: '1rem 0 0.7rem 0',
              padding: '0 0.5rem 0 0.5rem'
            }}
          >
            <Typography variant="h2" align= 'center' style={{ alignSelf: 'center' }}>
              {props.product?.name}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2,
              padding: '0rem 1.5rem 0.5rem 1.5rem',
              overflow: 'hidden',
            }}
          >
            {getContenu()}
          </div>
        </div>
      </div>
    </Link>
  )
}
