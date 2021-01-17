import React from 'react'
import { Grid } from '@material-ui/core'

// import { products } from '../constants/products'
import Product from './Product'
import useStyles from '../styles/products-styles'

export default function Products({ products }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
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
