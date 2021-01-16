import React from 'react'
import { Grid } from '@material-ui/core'

import { products } from '../constants/products'
import Product from './Product'

export default function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}> {/* material UI grid */}
          {products.map(product => {
            return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
              )
          })}
      </Grid>
    </main>
  )
}
