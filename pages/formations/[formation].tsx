import React from 'react'
import { Navigation } from 'components/Navigation'
import {
  Collapse,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'
import { PerfectIconTitleContent } from 'components/PerfectIconTitleContent'
import { TitleBar } from 'components/TitleBar'
import { PerfectTile } from 'components/PerfectTile'
import { Footer } from 'components/Footer'
import { colors } from 'modules/theme'
import PerfectRating from 'components/PerfectRating'
import { formationExemple } from 'modules/formationExemple'

export const useStyles = makeStyles<Theme>((theme) => ({
  marginRating: {
    margin: 'auto',
  },
}))

export default function Formation() {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div>
      <Navigation />
      <Container style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <TitleBar color="vert" title={formationExemple.titre} />

        <PerfectIconTitleContent
          iconUrl="/picto/information.png"
          title="Les informations à retenir"
          textContent={formationExemple.informationsARetenir}
          iconPosition="left"
        />

        <Grid container spacing={3} style={{ padding: '0 10rem' }}>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Durée totale de la formation" iconUrl="/picto/duree_noire.png">
              <Typography color="textSecondary">
                {formationExemple.dureeJours} jours - {formationExemple.dureeHeure} heures
              </Typography>
            </PerfectTile>
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Lieu" iconUrl="/picto/location.png">
              <Typography color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
                {formationExemple.lieu}
              </Typography>
            </PerfectTile>
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Prix" iconUrl="/picto/euro.png">
              <Typography color="textSecondary">
                {formationExemple.prixEntreprise}€ pour les entreprises <br />
                {formationExemple.prixParticuliers}€ pour les particuliers
              </Typography>
            </PerfectTile>
          </Grid>
        </Grid>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="h3" align="center">
            Cette formation vous permet d&apos;obtenir :
          </Typography>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <img
              src="/formations/france_competences.png"
              alt="france competence certification"
              style={{
                width: '30%',
                borderRadius: '30px',
                border: `2px solid ${colors.noir}`,
                boxShadow: '0 0 25px #BBB',
              }}
            />
            <Typography>
              Ces formations conduisent à la certification &quot;{formationExemple.certFranceCompetence}&quot;
              inscrite au répertoire spécifique de France Compétences.
            </Typography>
          </div>
        </div>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item sm={6} xs={12}>
            <PerfectTile title="A qui s'adresse cette formation" style={{ height: '100%' }}>
              <Typography color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
                {formationExemple.pourQui}
              </Typography>
            </PerfectTile>
          </Grid>
          <Grid item sm={6} xs={12}>
            <PerfectTile title="Pré-requis" style={{ height: '100%' }}>
              <Typography color="textSecondary">{formationExemple.prerequis}</Typography>
            </PerfectTile>
          </Grid>
        </Grid>

        <div style={{ width: '45em', margin: 'auto' }}>
          <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
            Organisation de la formation
          </Typography>
          <Typography>
            La certification de formateur est organisée en{' '}
            {formationExemple.modulesFormation.length} modules :
          </Typography>
          <List style={{ listStyleType: 'initial' }}>
            {formationExemple.modulesFormation.map((module) => (
              <ListItemText style={{ display: 'list-item' }} key={module}>{module}</ListItemText>
            ))}
          </List>
        </div>

        <Grid container>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Atteinte des objectifs"
              value={formationExemple.metriques.attenteObjectifs}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Moyennes des notes obtenues"
              value={formationExemple.metriques.moyennesNotes}
              max={20}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Taux de satisfaction"
              value={formationExemple.metriques.satisfaction}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Taux de réussite"
              value={formationExemple.metriques.reussite}
            />
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
              Objectifs de la formation
            </Typography>
            <Typography align="justify" style={{ whiteSpace: 'pre-line' }}>
              {formationExemple.objectifsFormation}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
              Objectifs pédagogiques
            </Typography>
            <Typography align="justify" style={{ whiteSpace: 'pre-line' }}>
              {formationExemple.objectifsPedagogiques}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={9}>
            <PerfectTile
              title="Obtention du certificat"
              color={colors.beige}
              textColor="textPrimary"
              style={{ height: '100%', textAlign: 'justify' }}
            >
              <Typography style={{whiteSpace: "pre-line"}}>{formationExemple.conditionsObtention}</Typography>
            </PerfectTile>
          </Grid>
          <Grid
            item
            sm={3}
            spacing={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(3),
              alignItems: 'stretch',
            }}
          >
            <Grid item>
              <PerfectTile title="Formation de présentation" iconUrl="/picto/conference.png">
                <Typography color="textSecondary">{formationExemple.format}</Typography>
              </PerfectTile>
            </Grid>
            <Grid item>
              <PerfectTile title="Effectif par session" iconUrl="/picto/peoples.png">
                <Typography color="textSecondary">
                  {formationExemple.effectifSessionMax} personnes max.
                </Typography>
              </PerfectTile>
            </Grid>
          </Grid>
        </Grid>
        {formationExemple.compatibleCPF && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <PerfectTile title="Financement" iconUrl="/picto/money.png">
                <Typography color="textSecondary">
                  Cette formation peut être financée par les OPCO, dans le cadre de certains
                  dispositifs de financement
                </Typography>
              </PerfectTile>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Formation financé par votre compte CPF</Typography>
              <Typography>
                Pour financer cette formation avec vos droits CPF, connectez vous sur Mon Compte
                Formation <br />
                Le financement par le CPF est réservé aux formations certifiantes, vous présenterez
                la certification &quot;{formationExemple.certFranceCompetence}&quot;
                inscrite au répertoire spécifique de France Compétences <br />
                Le tarif de la formation incluant la certification est de {formationExemple.tarifCpfHT}€HT soit {formationExemple.tarifCpfTTC}€TTC (Vos
                droits CPF sont exprimés en TTC)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img
                src="/formations/offre_formation_eligible.png"
                alt="offre de formation éligible à mon compte formation"
                style={{
                  width: '100%',
                  borderRadius: '30px',
                  boxShadow: '0 0 25px #BBB',
                }}
              />
            </Grid>
          </Grid>
        )}
        <PerfectIconTitleContent
          title="Programme détaillé de la formation"
          iconPosition="right"
          iconUrl="/picto/information.png"
        />
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {formationExemple.programme.map((section) => (
              <React.Fragment key={section.titre}>
                <TitleBar color="vert" title={`${section.titre} - ${section.dureeJours} jours`} />
                {section.contenu.map((chapitre) => (
                  <React.Fragment key={chapitre.titre}>
                    <Typography variant="h3">{chapitre.titre}</Typography>
                    <List>
                      {chapitre.contenu.map((contenu) => (
                        <ListItemText key={contenu}>{contenu}</ListItemText>
                      ))}
                    </List>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile
              title="prochaines sessions à paris"
              iconUrl="/picto/calendar.png"
              color={colors.beige}
            >
              <Typography>
                {formationExemple.sessions.map((session) => (
                  <>
                    {session} <br />
                  </>
                ))}
              </Typography>
            </PerfectTile>
            <PerfectTile title="Renseignements et inscriptions" iconUrl="/picto/phone.png">
              <Typography color="textSecondary">
                06 52 28 19 83 <br />
                contact@perfectcenter.fr
              </Typography>
            </PerfectTile>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}
