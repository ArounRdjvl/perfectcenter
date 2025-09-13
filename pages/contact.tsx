import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Divider } from '../components/Divider'

export default function contact() {
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [subject, setSubject] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const ref = React.useRef<HTMLDivElement>(null)

  const { palette, spacing } = useTheme()

  function validateForm() {
    return true // TODO validate form
  }

  function submitForm() {
    fetch('/api/sendMail', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, content }),
    }).then((res) => {
      res.status === 200 ? console.log('email sent') : console.error('error email')
    })
    ;(setName(''), setEmail(''), setSubject(''), setContent(''))
  }

  if (isMobile) {
    return (
      <Container ref={ref}>
        {/* <Background elRef={ref} /> */}
        <Navigation />
        <Grid container style={{ marginTop: '2rem' }}>
          <Grid
            size={{ xs: 12, md: 7 }}
            style={{
              zIndex: 2,
              margin: '3rem 0 3rem 0',
              backgroundColor: '#E3CCB4',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Typography variant="h1" align="center" color="textPrimary">
                Nous Contacter
              </Typography>
              <Divider color="vert" />
            </div>
            <TextField
              style={{ margin: spacing(1), marginBottom: '1rem' }}
              name="name"
              label="Nom"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ margin: spacing(1), marginBottom: '1rem' }}
              name="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ margin: spacing(1), marginBottom: '1rem' }}
              name="subject"
              label="Sujet"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              style={{ margin: spacing(1), marginBottom: '1rem' }}
              name="content"
              label="Message"
              type="text"
              multiline
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={submitForm}
                style={{ alignSelf: 'center', margin: '2rem' }}
              >
                Envoyer
              </Button>
              <img
                src="picto/Feuille.png"
                width={130}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  marginLeft: -50,
                  marginTop: 10,
                }}
              />
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                left: '0%',
                zIndex: 0,
                position: 'absolute',
                backgroundColor: '#849994',
                borderRadius: '20px',
                width: '100%',
                height: '100%',
              }}
            ></div>
            <div style={{ zIndex: 1, margin: '2rem 0' }}>
              <Typography variant="h1" align="center" color="textSecondary">
                Venir à PerfectCenter
              </Typography>
              <Divider color="beige" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.306362520997!2d2.3082491156748466!3d48.87143597928878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8823b9b9a9b19%3A0x4e5130e5e04510fa!2sPerfectCenter!5e0!3m2!1sfr!2sfr!4v1620315685130!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0, margin: '1rem 0' }}
                loading="lazy"
              ></iframe>
              <div style={{ marginBottom: '5px' }}>
                <Divider color="beige" width="60px" height="3px" />
                <Typography
                  color="textSecondary"
                  style={{
                    textAlign: 'center',
                    margin: '5px',
                  }}
                >
                  34 rue du colisée
                  <br /> 75008 - Paris
                </Typography>
                <Divider color="beige" width="60px" height="3px" />
              </div>
              <div>
                <div>
                  <Typography variant="h2" color="textSecondary">
                    Métro :
                  </Typography>
                  <Divider color="beige" width="60px" height="3px" margin="0 0 8px 12px" />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 0.5rem 2rem',
                  }}
                >
                  <img src="icons/metro1.png" width={30} />
                  <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                    Station Franklin-Roosevelt
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '1rem',
                    margin: '0 0 0.5rem 2rem',
                  }}
                >
                  <img src="icons/metro9.png" width={30} />
                  <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                    Station Saint Philippe du Roule
                  </Typography>
                </div>
                <div>
                  <Typography variant="h2" color="textSecondary">
                    Bus :
                  </Typography>
                  <Divider color="beige" width="35px" height="3px" margin="0 0 7px 12px" />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 0.5rem 2rem',
                  }}
                >
                  <img src="icons/Bus32.png" width={30} />
                  <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                    Arrêt Saint Philippe du Roule
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '1rem',
                    margin: '0 0 0.5rem 2rem',
                  }}
                >
                  <img src="icons/Bus43.png" width={30} />
                  <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                    Arrêt Saint Augustin - La boétie
                  </Typography>
                </div>
                <div>
                  <Typography variant="h2" color="textSecondary">
                    RER :
                  </Typography>
                  <Divider color="beige" width="45px" height="3px" margin="0 0 1rem 12px" />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 0.5rem 2rem',
                  }}
                >
                  <img src="icons/RERE.png" width={30} />
                  <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                    Station Haussmann St Lazard
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    )
  }
  return (
    <Container ref={ref}>
      {/* <Background elRef={ref} /> */}
      <Navigation />
      <Grid container style={{ marginTop: '2rem' }}>
        <Grid
          size={{ xs: 12, md: 7 }}
          component={Grid}
          style={{
            zIndex: 2,
            margin: '3rem 0 3rem 0',
            backgroundColor: '#E3CCB4',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 5rem',
          }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <Typography variant="h1" align="center" color="textPrimary">
              Nous Contacter
            </Typography>
            <Divider color="vert" />
          </div>
          <TextField
            style={{ margin: spacing(1), marginBottom: '1rem' }}
            name="name"
            label="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ margin: spacing(1), marginBottom: '1rem' }}
            name="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ margin: spacing(1), marginBottom: '1rem' }}
            name="subject"
            label="Sujet"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            style={{ margin: spacing(1), marginBottom: '1rem' }}
            name="content"
            label="Message"
            type="text"
            multiline
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={submitForm}
              style={{ alignSelf: 'center', margin: '2rem', width: '20%', fontSize: '20px' }}
            >
              Envoyer
            </Button>
            <img
              src="picto/Feuille.png"
              width={130}
              style={{
                position: 'absolute',
                zIndex: 2,
                marginLeft: '2rem',
                marginTop: '1rem',
              }}
            />
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div
            style={{
              left: '-20%',
              zIndex: 0,
              position: 'absolute',
              backgroundColor: '#849994',
              borderRadius: '20px',
              width: '120%',
              height: '100%',
            }}
          ></div>
          <div style={{ zIndex: 1, margin: '2rem 0' }}>
            <Typography variant="h1" align="center" color="textSecondary">
              Venir à PerfectCenter
            </Typography>
            <Divider color="beige" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.306362520997!2d2.3082491156748466!3d48.87143597928878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8823b9b9a9b19%3A0x4e5130e5e04510fa!2sPerfectCenter!5e0!3m2!1sfr!2sfr!4v1620315685130!5m2!1sfr!2sfr"
              width="400"
              height="300"
              style={{ border: 0, margin: '1rem' }}
              loading="lazy"
            ></iframe>
            <div style={{ marginBottom: '5px' }}>
              <Divider color="beige" width="60px" height="3px" />
              <Typography color="textSecondary" style={{ textAlign: 'center', margin: '5px' }}>
                34 rue du colisée
                <br /> 75008 - Paris
              </Typography>
              <Divider color="beige" width="60px" height="3px" />
            </div>
            <div>
              <div>
                <Typography variant="h2" color="textSecondary">
                  Métro :
                </Typography>
                <Divider color="beige" width="60px" height="3px" margin="0 0 8px 12px" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 0 0.5rem 2rem',
                }}
              >
                <img src="icons/metro1.png" width={30} />
                <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                  Station Franklin-Roosevelt
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '1rem',
                  margin: '0 0 0.5rem 2rem',
                }}
              >
                <img src="icons/metro9.png" width={30} />
                <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                  Station Saint Philippe du Roule
                </Typography>
              </div>
              <div>
                <Typography variant="h2" color="textSecondary">
                  Bus :
                </Typography>
                <Divider color="beige" width="35px" height="3px" margin="0 0 7px 12px" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 0 0.5rem 2rem',
                }}
              >
                <img src="icons/Bus32.png" width={30} />
                <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                  Arrêt Saint Philippe du Roule
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '1rem',
                  margin: '0 0 0.5rem 2rem',
                }}
              >
                <img src="icons/Bus43.png" width={30} />
                <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                  Arrêt Saint Augustin - La boétie
                </Typography>
              </div>
              <div>
                <Typography variant="h2" color="textSecondary">
                  RER :
                </Typography>
                <Divider color="beige" width="45px" height="3px" margin="0 0 1rem 12px" />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 0 0.5rem 2rem',
                }}
              >
                <img src="icons/RERE.png" width={30} />
                <Typography color="textSecondary" style={{ marginLeft: '1rem' }}>
                  Station Haussmann St Lazard
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
}
