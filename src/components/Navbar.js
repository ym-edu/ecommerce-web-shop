import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../assets/commerce.jpeg'
import useStyles from '../styles/navbar-styles'

function Navbar({totalItems}) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge color="secondary" badgeContent={totalItems}></Badge> {/* hardcoded value of cart items */}
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
