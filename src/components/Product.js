import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from '../styles/product-styles'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // console.log(product);

  return (
      <Card  className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography variant="h5" gutterBottom> {/* Material UI text */}
              {product.name}
            </Typography>
            <Typography variant="h5"> {/* Material UI text */}
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary">
            {/* {product.description} */}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Product
