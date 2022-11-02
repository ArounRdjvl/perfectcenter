import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'
import { ImageAndDescription } from 'components/ImageAndDescription'

export function InfoMinte() {
  return (
    <>
      <div
        style={{
          width: '100%',
          marginTop: '4rem',
        }}
      >
        <Typography variant="h2" align="center">
            A propos de Mint-e
        </Typography>
      </div>
      <div
        style={{
          padding: '2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ImageAndDescription position='left'titre="Des produits sûrs" description="Nous sommes attachés au premier principe d’Hippocrate, “En premier, ne pas nuire “. En fait, en utilisant toute la plante, la variété des principes actifs rend l’assemblage 100% assimilable, donc sans déchets ni effets secondaires. Ainsi le Z-Flex dont l&apos;efficacité a été testée au Centre Léon Berard de Lyon, n&apos;a aucun effet secondaire et peut être utilisé par des personnes allergiques au paracétamol. A l&apos;inverse une trop forte concentration d&apos;un unique principe actif peut entraîner des effets secondaires. " photo='/picto/produit_sur.png' />
        <ImageAndDescription position='right' titre="Sourcing provence et ardeche" description="Les ingrédients naturels sublimés dans nos compléments alimentaires et cosmétiques proviennent de nos régions. La certification Ecocert garantit la traçabilité et atteste de la provenance locale des matières premières." photo='/picto/lavande.png' />
        <ImageAndDescription position='left' titre="100% MADE IN FRANCE" description="Tout nos produits sont fait en France, à base de plants principalement françaises. Fabriqué in Auvergne et Provence" photo='/picto/Paris.png' />
        <ImageAndDescription position='right'titre="Production en auvergne et provence" description="Une fois les ingrédients récoltés, ils sont acheminés non loin de leur lieu de production, vers nos laboratoires, où ils sont transformés selon des formulations minutieusement mises au point durant de longues années de recherche." photo='/picto/rhone_alpe.png' />
        </div>
        <div
            style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
        <Link href="https://mint-elabs.fr" underline="none" style={{ marginBottom: '2rem' }}>
            <Button variant="contained" color="secondary" size="large">
                En savoir plus
            </Button>
        </Link>
      </div>
    </>
  )
}