import React from 'react'
import Head from 'next/head'
import { AccueilCoach } from 'components/PerfectCircle/AccueilCoach'
import { RdvCoach } from 'components/PerfectCircle/RdvCoach'
import { useRouter } from 'next/router'
import { PraticienType } from 'modules/types'
import { dataCoachs } from 'modules/data'
import { Footer } from 'components/Footer'
import { Navigation } from 'components/Navigation'

export default function MembrePerfectCircle() {
  const ref = React.useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { membre } = router.query
  const [praticien, setPraticien] = React.useState<PraticienType | undefined | 'error'>(undefined)

  React.useEffect(() => {
    if (membre === undefined) return
    const temp = dataCoachs.find(
      (coach) => membre === coach.name.toLowerCase().split(/\s/).join('_')
    )
    if (temp === undefined) {
      setPraticien('error')
    } else {
      setPraticien(temp)
    }
  }, [membre, router])

  if (praticien === 'error') {
    return <div>error</div>
  }
  return (
    <div ref={ref}>
      {praticien && (
        <Head>
          <title>{praticien.name}</title>
        </Head>
      )}
      <Navigation />
      {praticien && (
        <AccueilCoach
          titre={praticien.name}
          photo={praticien.photo}
          pratique={praticien.practice1}
          description={praticien.description}
        />
      )}
      <RdvCoach />
      <Footer />
    </div>
  )
}
