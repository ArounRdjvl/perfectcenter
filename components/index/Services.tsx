import { Typography } from '@material-ui/core'
import React from 'react'
import { MembrePerfectIndex} from './MembrePerfectIndex'
import { ProduitIndex } from './ProduitIndex'
import { FormationsIndex } from './FormationsIndex'
import { PrestationsIndex } from './PrestationsIndex'

export function Services() {
  return (
    <>
      <Typography variant="h1" align="center" style={{ margin: '2rem 0 0.5rem' }} />
      <PrestationsIndex />
      <MembrePerfectIndex />
      <ProduitIndex />
      <FormationsIndex />
    </>
  )
}
