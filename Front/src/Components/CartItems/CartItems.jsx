import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import women1 from '../Assets/women1.png'
import remove from '../Assets/remove.png'
export const CartItems = () => {
    const {all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
   <div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
   </div>
  <hr />
 { all_product.map((e)=>{
    if(cartItems[e.id]>0)
    {
        return <div>
             <div className="cartitems-format">
             <img src={e.image} alt="" className='cart-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
   </div>
    </div>
    }
 })
 }
    </div>
  )
}
