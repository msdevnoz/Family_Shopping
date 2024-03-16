import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import dropdown from '../Components/Assets/dropdown.png'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
  <div className="shopcategory">
    <div className="shopcategoryleft">
      <h1>FLAT 50% OFF</h1>
      <p><span>12 </span> Hours<span> 20</span> Mins</p>
      <button>Explore now</button>
    </div>
    <div className="shopcategoryright">
    <img className="shopcategory-banner" src={props.banner} alt="" />
    </div>
  </div>

  <div className="shopcategory-indexSort">
    <p><span>Showing 1-12</span> out of 36 products</p>
    <div className="shopcategory-sort">
      Sort by <img src={dropdown} alt="" />
    </div>
  </div>
  <div className="shopcategory-products">
  {all_product.map((item,i)=>{
       if (props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      }
      else{
        return null;
      }
            })}
  </div>
  <div className="shopcategory-loadmore">Explore More</div>
    </div>
  )
}
export default ShopCategory;