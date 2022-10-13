import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'
import { ImageAndDescription } from 'components/ImageAndDescription'

export function InfoKaqun() {
  return (
    <>
      <div
        style={{
          width: '100%',
          marginTop: '4rem',
        }}
      >
        <Typography variant="h2" align="center">
            Les avantages à boire de leau KAQUN®
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
        <ImageAndDescription position='left' titre="Soutenir notre système immunitaire" description="L&apos;oxygène est un élément crucial pour nos cellules et notre corps. Sans elle, notre corps et nos cellules deviendront moins efficaces pour maintenir une condition physique et mentale optimale. Avec l&apos;eau KAQUN, nous pouvons soutenir nos cellules avec suffisamment d'oxygène pour améliorer notre bien-être général" photo='/picto/bouclier.png' />
        <ImageAndDescription position='right' titre="Diminuer l'hypoxie" description="L'hypoxie, également connue sous le nom de carence en oxygène, est un terme médical utilisé pour décrire une condition dans laquelle nos cellules ne reçoivent pas suffisamment d'oxygène. Ici, il est essentiel de différencier l'apport d'oxygène au sang et à la cellule, car même dans le cas d'un apport d'oxygène sanguin parfait, une carence en oxygène dans les cellules peut survenir. En consommant de l'eau KAQUN, nous pouvons améliorer à la fois notre niveau d'oxygène cellulaire et sanguin" photo='/picto/o2.png' />
        <ImageAndDescription position='left'titre="Améliorer les performances" description="Plusieurs articles ont étudié l'importance de l'apport d'oxygène sur les performances des athlètes, et les résultats concluent tous à peu près que le manque d'oxygène affecte non seulement les performances sportives, mais également la fonction physiologique. En buvant de l'eau KAQUN, nous pourrions améliorer les performances lors d'exercices intenses car, pendant l'activité, le principal carburant de notre corps (le glycogène) est livré aux cellules par l'oxygène. Par conséquent, en améliorant l'approvisionnement en oxygène, nous pouvons améliorer notre mécanisme de distribution de carburant pour une meilleure force. " photo='/picto/sport.png' />
        <ImageAndDescription position='right'titre="Améliorer sa récupération" description="De meilleures performances ne dépendent pas seulement de la quantité de travail effectuée. Si notre apport en oxygène est insuffisant, nos cellules utiliseront 16 fois plus d'énergie pour se régénérer. Ce processus augmente la production d'acide lactique dans les muscles, entraînant des douleurs musculaires et de la fatigue. En consommant de l'eau KAQUN, nous pouvons réduire la production d'acide lactique pour une régénération plus efficace." photo='/picto/dodo.png' />
        <ImageAndDescription position='left'titre="Améliorer sa mémoire" description="La recherche a montré que même un léger manque d'oxygène peut altérer la mémoire et le bien-être des enfants aux personnes âgées. Notre cerveau utilise la majeure partie de l'oxygène que nous respirons pour maintenir les fonctions de base nécessaires à notre survie. Par conséquent, l'amélioration de notre apport en oxygène peut améliorer toutes les fonctions cérébrales." photo='/picto/cerveau.png' />
        </div>
        <div
            style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
        <Link href="https://www.kaqun.hu/" underline="none" style={{ marginBottom: '2rem' }}>
            <Button variant="contained" color="secondary" size="large">
                En savoir plus
            </Button>
        </Link>
      </div>
    </>
  )
}