import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar } from './components'

export default function App() {
  // We use products in App instead of Products because many important features will require the data such as cart, etc.
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const response = await commerce.products.list();
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products)

  return (
    <div>
      <Navbar />
      <Products products={products}></Products>
    </div>
  )
}
