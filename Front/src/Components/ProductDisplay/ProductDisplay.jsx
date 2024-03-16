import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext)
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                <FontAwesomeIcon icon={faStar} color="gold" size="1x" />
                <FontAwesomeIcon icon={faStar} color="gold" size="1x" />
                <FontAwesomeIcon icon={faStar} color="gold" size="1x" />
                <FontAwesomeIcon icon={faStar} color="gold" size="1x" />
                <span style={{ color: '#FFD43B',fontSize: '25px' }}>&#9734;</span>

                <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="product-display-right-price-old">${product.old_price}</div>
                    <div className="product-display-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    impedit numquam reprehenderit quisquam illum quidem cumque at
                     </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
              <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
              <p className='productdisplay-right-category'><span>Category : </span> Women,T-Shirt,Crop Top</p>
              <p className='productdisplay-right-category'><span>Tags : </span> Modern,Latest</p>
            </div>

        </div>
    );
};