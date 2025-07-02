import React, { useState,useContext } from 'react';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import './ProductDisplay.css';
import { ShopContext } from '../Context/ShopContext';

export const ProductDisplay = ({ product }) => {
 
  const {addToCart} = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  const thumbnails = [product.image, product.image, product.image, product.image];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      {/* Left Section */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {thumbnails.map((thumb, index) => (
            <img key={index} src={thumb} alt={`thumb-${index}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="main product" />
        </div>
      </div>

      {/* Right Section */}
      <div className="productdisplay-right">
        <h1><b>{product.name}</b></h1>

        {/* Rating */}
        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="dull star" />
          <p>(122)</p>
        </div>

        {/* Price */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>

        {/* Description */}
        <div className="productdisplay-right-description"><h2>
          A lightweight, usually knitted, pullover shirt, close-fitting and wide-fitting,
          with a round neckline and short sleeves, worn as an undershirt or outer garment.
          </h2>
        </div>

        {/* Size Selector */}
        <div className="productdisplay-right-size">
          <h3><b>Select Size</b></h3>
          <div className="productdisplay-right-size-options">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="productdisplay-right-actions">
          <button className="add-to-cart-button" onClick={()=>{
            console.log("Button clicked");
            addToCart(product.id)
            } }>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category: </span>
            Women, T-shirt, Crop top
          </p>
        </div>
      </div>
    </div>
  );
};
