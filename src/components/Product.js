import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from '../styles/product-styles'

const Product = ({ product }) => {
  const classes = useStyles();

  console.log(product);

  return <div>test</div>

  return (
      <Card  className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name} />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography variant="h5" gutterBottom> {/* Material UI text */}
              {product.name}
            </Typography>
            <Typography variant="h5"> {/* Material UI text */}
              {product.price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Product
