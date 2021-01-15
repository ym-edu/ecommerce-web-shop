import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

const Product = ({ product }) => {
  return (
      <Card>
        <CardMedia image='' title={product.name} />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom> {/* Material UI text */}
              {product.name}
            </Typography>
            <Typography variant="h5"> {/* Material UI text */}
              {product.price}
            </Typography>
          </div>
          <Typography variant="h2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Product
