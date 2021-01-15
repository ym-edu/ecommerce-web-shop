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
              {product.description}
            </Typography>
          </div>
        </CardContent>
      </Card>
  )
}

export default Product
