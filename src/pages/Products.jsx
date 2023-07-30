import React from 'react'
import "./Products.css"
import { PRODUCTS } from './ProductList'
import Product from './Product'

const Products = () => {
  return (
    <div className='products flexAllCol'>
      <p className='flexAll title'>Unleash the Shopping Delight: Browse Our Diverse Range of Premium Products!</p>
      <div className="plist flexAll">
        {""}
        {PRODUCTS.map((product) => <Product data={product} />)}
      </div>
    </div>
  )
}

export default Products
