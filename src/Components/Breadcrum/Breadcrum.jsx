import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrum.css'
export const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      <span>HOME</span>
      <img src={arrow_icon} alt=">" />
      <span>SHOP</span>
      <img src={arrow_icon} alt=">" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt=">" />
      <span>{product.name}</span>
    </div>
  );
};
