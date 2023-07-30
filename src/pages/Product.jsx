import React, { useContext } from 'react'
import './Product.css'
import { ShopContext } from '../context/Shop-context';

const Product = (props) => {
    const {id, productName, price, productImage, category} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div className='flexAll pcard'>
      <div className="card flexAllCol">
        <img src={productImage} alt="" />
        <div className="pp1">
        <p className="pp pname">{productName}</p>
        <p className="ppr">₹{price}/-</p>
        </div>
        <div className="pp1">
        <button className='pp spp' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        {/* <p className='ppr spp'>- 1 +</p> */}
        </div>
      </div>
    </div>
  )
}

export default Product
