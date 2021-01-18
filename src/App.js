import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar } from './components'

export default function App() {
  // We use products in App instead of Products because many important features will require the data such as cart, etc.
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    // const response = await commerce.products.list();
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }

  console.log('After adding item', cart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}></Products>
    </div>
  )
}
