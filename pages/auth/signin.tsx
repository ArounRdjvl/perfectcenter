import { Button, Container, TextField, Typography } from '@material-ui/core'
import { colors } from 'modules/theme'
import React from 'react'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function Signin() {
  const router = useRouter()

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const ref = React.useRef<HTMLDivElement>(null)

  const handleConnectionClick = React.useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: typeof router.query.callbackUrl === 'string' ? router.query.callbackUrl : '/',
      })
    } catch (e: any) {
      setErrorMessage(`${e.name} : ${e.message}`)
    }
  }, [email, password])

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
          <img src="/picto/connexion.png" width={75} style={{ zIndex: 2 }} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
