import React, { useContext } from 'react'
import { ShopContext } from '../context/Shop-context';
import './CartItem.css'

const CartItem = (props) => {
    const {id, productName, price, productImage, category} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" height={100} />
        <div className='name'>
            <p style={{fontWeight:'bolder', fontSize:'20px'}}>{productName}</p>
            <p style={{fontSize:'10px'}}>{category}</p>
        </div>
        <div className="price"><p>₹{price}/-</p>
        <p>Qty: 
            <button onClick={() => removeFromCart(id)} style={{marginLeft:'10px'}}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} style={{width:'20px',marginLeft:'3px'}} />
            <button onClick={() => addToCart(id)} style={{marginLeft:'3px'}}>+</button>
        </p>
        </div>
    </div>
  )
}

export default CartItem
