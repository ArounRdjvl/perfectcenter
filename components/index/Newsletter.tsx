import { Typography, useTheme, useMediaQuery, TextField, Button } from '@mui/material'
import React from 'react'
import { colors } from '../../modules/theme'

export function Newsletter() {
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const subject = 'Newsletter'
  const content = 'Inscription à la newsletter'
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  function submitForm() {
    fetch('api/sendMail', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, content }),
    }).then((res) => {
      res.status === 200 ? console.log('email sent') : console.error('error email')
    })
    setName('')
    setEmail('')
  }

  if (isMobile) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem 2rem 0 2rem',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '8rem',
            height: '8rem',
            marginBottom: '1rem',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.vert,
          }}
        >
          <img src="picto/E-mail.png" width={75} style={{ zIndex: 2 }} />
        </div>
        <Typography align="justify" style={{ fontSize: '28px' }}>
          Newsletter
        </Typography>
        <Typography align="justify" style={{ fontSize: '20px', marginTop: '1rem' }}>
          Ne manquez aucune information sur les offres et les nouveautés de PerfectCenter en vous
          inscrivant à notre Newletter !
        </Typography>
        <TextField
          style={{ marginBottom: '2rem', marginTop: '1rem', width: '90%' }}
          name="name"
          label="Prénom"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={{ marginBottom: '2rem', marginTop: '1rem', width: '90%' }}
          name="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={submitForm}
          style={{ width: '40%', fontSize: '20px' }}
        >
          Inscription
        </Button>
      </div>
    )
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 2rem 0 2rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '8rem',
          height: '8rem',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          background: colors.vert,
        }}
      >
        <img src="picto/E-mail.png" width={75} style={{ zIndex: 2 }} />
      </div>
      <Typography align="justify" style={{ fontSize: '28px' }}>
        Newsletter
      </Typography>
      <Typography align="justify" style={{ fontSize: '20px', marginTop: '1rem' }}>
        Ne manquez aucune information sur les offres et les nouveautés de PerfectCenter en vous
        inscrivant à notre Newletter !
      </Typography>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '80px',
        }}
      >
        <TextField
          style={{ marginBottom: '2rem', marginTop: '1rem', width: '40%' }}
          name="name"
          label="Prénom"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={{ marginBottom: '2rem', marginTop: '1rem', width: '40%' }}
          name="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={submitForm}
        style={{ width: '30%', fontSize: '20px' }}
      >
        Inscription
      </Button>
    </div>
  )
}
