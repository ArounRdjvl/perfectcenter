import React, { useEffect } from 'react';
import Head from 'next/head';
import { Navigation } from '../../ components/Navigation';
import { Container, Typography } from '@material-ui/core';
import { colors } from '../../modules/theme';
import { Footer } from '../../ components/Footer';
import { TitleBar } from '../../ components/TitleBar';
import { dataMembres } from '../../modules/data';
import { AccueilProduit } from ' components/PerfectCare/AccueilProduit';
import { LumiereMusique } from ' components/PerfectCare/Psio/LumiereMusique';
import { AchatPsio } from ' components/PerfectCare/Psio/AchatPsio';
import { BanniereInfo } from ' components/BanniereInfo';
import { BulleInfo } from ' components/BulleInfo';
import { AccueilCoach } from ' components/PerfectCircle/AccueilCoach';
import { RdvCoach } from ' components/PerfectCircle/RdvCoach';
import { useRouter } from 'next/router';
import { dataCoachs } from '../../modules/data';
import { isEqual } from '@react-spring/shared';
import { PraticienType } from 'modules/types';

export default function membrePerfectCircle() {
  const ref = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const membre = router.query.membre;
  const [praticien, setPraticien] = React.useState<PraticienType | undefined | 'error'>(undefined);
  React.useEffect(() => {
    if (membre === undefined) return;
    const temp = dataCoachs.find((coach) => {
      return membre === coach.name.toLowerCase().split(/\s/).join('_');
    });
    if (temp === undefined) {
      setPraticien('error');
    } else {
      setPraticien(temp);
    }
  }, [router]);
  console.log(praticien);
  if (praticien === 'error') {
    return <div>error</div>;
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
      <RdvCoach pratique="Pratique 1" />
      <Footer />
    </div>
  );
}
