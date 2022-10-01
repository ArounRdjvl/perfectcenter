import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'
import { TitleBar } from 'components/TitleBar'

export default function Prestations() {
    const ref = React.useRef<HTMLDivElement>(null)

    return (
        <div ref={ref}>
            <Head>
                <title>Nos Prestations</title>
            </Head>
            <Navigation />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '1rem 2vw',
                    alignContent: 'flex-start',
                    justifyContent: 'space-evenly',
                }}
            >
                <Container>
                    <TitleBar title="Nos Prestations" color="vert" padding="0 0 2rem 0" />
                </Container>
            </div>
            <Footer />
        </div>
    )
}
