import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { TitleBar } from 'components/TitleBar'
import { Article } from 'components/Article'
import { dataArticles } from 'modules/data'

export default function articles() {
  return (
    <div>
      <Head>
        <title>Articles</title>
      </Head>
      <Container>
        <Navigation />

        <TitleBar title="Nos articles" color="vert" />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'space-evenly',
            margin: '1rem 0',
          }}
        >
          {dataArticles.map((article, i) => {
            const pair = i % 2 === 0
            return <Article pair={pair} user={article} />
          })}
        </div>
      </Container>
      <Footer />
    </div>
  )
}
