import React, { useContext } from 'react'
import './Cart.css'
import { PRODUCTS } from './ProductList'
import {ShopContext} from '../context/Shop-context'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, getCartTotalAmount} = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getCartTotalAmount();
  return (
    <div className='cart flexAllCol'>
      <p className='ctext'>Your Cart!</p>
      <div className="cartItems">
        {""}{PRODUCTS.map((Product) => {
        if(cartItems[Product.id]!==0){
         return <CartItem data={Product} />
        }
          })}
      </div>
        {totalAmount > 0 ?
      <div className="chck">
        <p>Total: ₹{totalAmount}/-</p>
        <button className='btn' onClick={() => navigate('/products')}>Continue Shopping</button>
        <button className='btn'>Check Out</button>
      </div>
      : <h1>Your Cart is empty</h1>}
    </div>
  )
}

export default Cart
