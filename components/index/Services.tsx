import { Typography } from '@material-ui/core'
import React from 'react'
import { PerfectCircleIndex } from './PerfectCircleIndex'
import { PerfectCareIndex } from './PerfectCareIndex'
import { PerfectCorporateIndex } from './PerfectCorporateIndex'
import { PrestationsIndex } from './PrestationsIndex'

export function Services() {
  return (
    <>
      <Typography variant="h1" align="center" style={{ margin: '2rem 0 0.5rem' }} />
      <PrestationsIndex />
      <PerfectCircleIndex />
      <PerfectCareIndex />
      <PerfectCorporateIndex />
    </>
  )
}
