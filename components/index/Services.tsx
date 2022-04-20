import { Typography } from '@material-ui/core'
import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { PerfectCircleIndex } from './PerfectCircleIndex'
import { PerfectCareIndex } from './PerfectCareIndex'
import { PerfectCorporateIndex } from './PerfectCorporateIndex'

export function Services() {
  return (
    <>
      <TitleBar title="Nos 3 pôles" background color="vert" paddingMobile="2rem 0 0 5vw" />
      <Typography variant="h1" align="center" style={{ margin: '2rem 0 0.5rem' }} />
      <PerfectCircleIndex />
      <PerfectCareIndex />
      <PerfectCorporateIndex />
    </>
  )
}
