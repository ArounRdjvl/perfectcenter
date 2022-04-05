import React from 'react';
import Head from 'next/head';
import { Navigation } from '../ components/Navigation';
import { Background } from '../ components/Background';
import { Membre } from '../ components/Membre';
import { Container } from '@material-ui/core';
import { Footer } from '../ components/Footer';
import { TitleBar } from '../ components/TitleBar';
import { dataMembres } from '../modules/data';

export default function membres() {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      {/* <Background elRef={ref} /> */}

      <Head>
        <title>Notre Equipe</title>
      </Head>
      <Navigation />
      <Container>
        <TitleBar title="Notre Equipe" background={true} color="vert" />
        {dataMembres.map((member, i) => {
          const pair = i % 2 == 0;
          return <Membre pair={pair} user={member} />;
        })}
      </Container>
      <Footer />
    </div>
  );
}
