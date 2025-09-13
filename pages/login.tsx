import { Button, Container, TextField, Typography } from '@mui/material'
import { useConnexion } from 'modules/connexion'
import { colors } from 'modules/theme'
import React from 'react'

// page d'exemple pour l'utilisation du hook useConnexion
// la connexion peut être implémenté de la même manière sur n'importe quel page existante
export default function index() {
  const {
    connected,
    email: connectedUser, // c'est un alias car username est déjà utilisé pour le state
    admin,
    connect,
    disconnect,
  } = useConnexion()

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const ref = React.useRef<HTMLDivElement>(null)

  async function handleConnectionClick() {
    try {
      await connect(email, password)
    } catch (e: any) {
      setErrorMessage(e.toString())
    }
  }

  React.useEffect(() => {
    setPassword('')
    setErrorMessage('')
  }, [connected])

  if (connected) {
    return (
      <div>
        you are connected
        <br />
        username : {connectedUser}
        <br />
        you are {admin ? 'an admin' : 'not an admin'}
        <br />
        <Button onClick={() => disconnect()}>se déconnecter</Button>
      </div>
    )
  } else {
    return (
      <Container ref={ref} style={{ display: 'flex', height: '100vh' }}>
        <div
          style={{
            width: '50vw',
            maxWidth: '50rem',
            minWidth: '20rem',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'row',
              margin: '1rem',
              borderRadius: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              background: colors.vert,
            }}
          >
            <img src="picto/connexion.png" width={75} style={{ zIndex: 2 }} />
          </div>
          <div
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '40px',
              backgroundColor: colors.beige,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" align="justify">
              Connexion à PerfectCenter
            </Typography>
          </div>
          <TextField
            name="user"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            style={{
              width: '55%',
              minWidth: '15rem',
              margin: '0.5rem',
            }}
          />
          <TextField
            name="user"
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{
              width: '55%',
              minWidth: '15rem',
              margin: '0.5rem',
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleConnectionClick}
            style={{ alignSelf: 'center', margin: '2rem', width: '35%', fontSize: '20px' }}
          >
            Connexion
          </Button>
          <br />
          {errorMessage}
        </div>
      </Container>
    )
  }
}
