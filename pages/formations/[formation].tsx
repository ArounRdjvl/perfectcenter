import React from 'react'
import { Navigation } from 'components/Navigation'
import {
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
import PerfectRating from '../../components/PerfectRating'

const url = '/picto/Apprentissage.png'
const title = 'Les informations à retenir'
const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloremque fugiat ' +
  'harum ipsam rerum! Ab esse hic impedit, incidunt nam non praesentium quam quidem.\n' +
  'Asperiores eum id itaque molestiae odit.'

export const useStyles = makeStyles<Theme>((theme) => ({
  marginRating: {
    margin: 'auto',
  },
}))

export default function formation() {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div>
      <Navigation />
      <Container style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <TitleBar color="vert" title="Formation de formateur certifiante" />

        <PerfectIconTitleContent
          iconUrl={url}
          title={title}
          textContent={content}
          iconPosition="left"
        />

        <Grid container spacing={3} style={{ padding: '0 10rem' }}>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Durée totale de la formation" iconUrl="/picto/duree_noire.png">
              <Typography color="textSecondary">10 jours - 70 heures</Typography>
            </PerfectTile>
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Lieu" iconUrl="/picto/duree_noire.png">
              <Typography color="textSecondary">
                34 rue du Colisée,
                <br />
                75008, Paris
              </Typography>
            </PerfectTile>
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="Prix" iconUrl="/picto/duree_noire.png">
              <Typography color="textSecondary">
                4450€ pour les entreprises <br />
                3950€ pour les particuliers
              </Typography>
            </PerfectTile>
          </Grid>
        </Grid>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="h3" align="center">
            Cette formation vous permet d'obtenir :
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
              Ces formations conduisent à la certification "Conception, animation et évaluation d'un
              action de formation" inscrite au répertoire spécifique de France Compétences.
            </Typography>
          </div>
        </div>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item sm={6} xs={12}>
            <PerfectTile title="A qui s'adresse cette formation" style={{ height: '100%' }}>
              <Typography color="textSecondary">
                Formateurs ayant récemment lancé leur activité <br />
                Personnes en reconversion vers le métier de formateur indépendant
              </Typography>
            </PerfectTile>
          </Grid>
          <Grid item sm={6} xs={12}>
            <PerfectTile title="Pré-requis" style={{ height: '100%' }}>
              <Typography color="textSecondary">
                Cette formation ne requiert aucun pré-requis
              </Typography>
            </PerfectTile>
          </Grid>
        </Grid>

        <div style={{ width: '45em', margin: 'auto' }}>
          <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
            Organisation de la formation
          </Typography>
          <Typography>La certification de formateur est organisée en 5 modules :</Typography>
          <List style={{ listStyleType: 'initial' }}>
            <ListItemText style={{ display: 'list-item' }}>Concevoir une formation</ListItemText>
            <ListItemText style={{ display: 'list-item' }}>Animer une formation</ListItemText>
            <ListItemText style={{ display: 'list-item' }}>
              Atelier pratique concevoir sa formation
            </ListItemText>
            <ListItemText style={{ display: 'list-item' }}>
              Au choix : Renforcer sa posture de formateur ou Former à distance
            </ListItemText>
            <ListItemText style={{ display: 'list-item' }}>
              Vendre et piloter un projet de formation
            </ListItemText>
          </List>
        </div>

        <Grid container>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Atteinte des objectifs"
              value={0.98}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Moyennes des notes obtenues"
              value={15.71}
              max={20}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating
              className={classes.marginRating}
              title="Taux de satisfaction"
              value={0.99}
            />
          </Grid>
          <Grid item xs={3}>
            <PerfectRating className={classes.marginRating} title="Taux de réussite" value={0.89} />
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
              Objectifs de la formation
            </Typography>
            <Typography align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex nihil quaerat
              velit voluptate. Culpa eaque iure veniam voluptate. Autem delectus esse molestias
              neque porro provident quas quod quos ratione sint, sunt tempora vel voluptas voluptate
              voluptatibus! Amet deleniti doloremque eligendi enim esse est eum ex illum
              necessitatibus nemo perferendis unde voluptatem, voluptatibus. A ab animi asperiores
              autem, consequuntur corporis cumque dicta dolor doloremque dolorum ea earum error esse
              exercitationem expedita facere fuga illo inventore ipsam iusto necessitatibus nemo
              neque omnis optio placeat possimus quae quia quis quod repellat sapiente sequi soluta
              sunt, suscipit tempora temporibus, voluptatem? Aut dolor, odit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" align="center" style={{ marginBottom: '1rem' }}>
              Objectifs pédagogiques
            </Typography>
            <Typography align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex nihil quaerat
              velit voluptate. Culpa eaque iure veniam voluptate. Autem delectus esse molestias
              neque porro provident quas quod quos ratione sint, sunt tempora vel voluptas voluptate
              voluptatibus! Amet deleniti doloremque eligendi enim esse est eum ex illum
              necessitatibus nemo perferendis unde voluptatem, voluptatibus. A ab animi asperiores
              autem, consequuntur corporis cumque dicta dolor doloremque dolorum ea earum error esse
              exercitationem expedita facere fuga illo inventore ipsam iusto necessitatibus nemo
              neque omnis optio placeat possimus quae quia quis quod repellat sapiente sequi soluta
              sunt, suscipit tempora temporibus, voluptatem? Aut dolor, odit.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={9}>
            <PerfectTile
              title="Obtention du certificat"
              color={colors.beige}
              textColor="textPrimary"
              style={{ height: '100%' }}
            >
              <Typography>Cette formation ne requiert aucun pré-requis</Typography>
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
              <PerfectTile title="Formation de présentation" iconUrl="/picto/duree_noire.png">
                <Typography color="textSecondary">Présentiel</Typography>
              </PerfectTile>
            </Grid>
            <Grid item>
              <PerfectTile title="Effectif par session" iconUrl="/picto/duree_noire.png">
                <Typography color="textSecondary">12 personnes max.</Typography>
              </PerfectTile>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <PerfectTile title="Financement">
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
              Le financement par le CPF est réservé aux formations certifiantes, vous présenterez la
              certification "Conception, animation et évaluation d'une action de formation" inscrite
              au répertoire spécifique de France Compétences <br />
              Le tarif de la formation incluant la certification est de 5200€HT soit 6240€TTC (Vos
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
        <PerfectIconTitleContent
          title="Programme détaillé de la formation"
          iconPosition="right"
          iconUrl={url}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <TitleBar color="vert" title="Conception pédagogique - 2 jours" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PerfectTile title="prochaines sessions à paris" iconUrl="/picto/duree_noire.png" color={colors.beige}>
              <Typography>
              12 - 14 avril 2022 <br />
              12 - 14 avril 2022 <br />
              12 - 14 avril 2022 <br />
              12 - 14 avril 2022 <br />
              </Typography>
            </PerfectTile>
            <PerfectTile title="Renseignements et inscriptions" iconUrl="/picto/duree_noire.png">
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
