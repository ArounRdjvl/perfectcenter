import React from 'react'
import { Typography } from '@material-ui/core'
import { Product } from 'components/Product'
import { dataPsio } from 'modules/data'

export function AchatPsio() {
  return (
    <>
      <div
        style={{
          width: '100%',
          marginTop: '4rem',
        }}
      >
        <Typography variant="h2" align="center">
          Achetez votre Psio
        </Typography>
      </div>
      <div
        style={{
          margin: '2rem 0rem',
          padding: '2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {dataPsio.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  )
}
