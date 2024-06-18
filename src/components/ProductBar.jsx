import React from 'react';
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css';
import  ArrowSvg from '../assets/Icons/right-arrow.svg';

const ProductBar = ({ productImage, title, description, trial }) => {
    return (
      <div className="product-card flex flex-col items-center hover:rounded-2xl hover:border hover:border-gray-100 hover:shadow-lg transition-all duration-300 ">
        <img src={productImage} alt={title} className="w-[90px] h-[80px] mb-[25px] font-inter " />
        <h4 className="text-[24px]  text-center mb-[15px] font-medium font-inter">{title}</h4>
        <p className="text-gray-600 mb-5 text-center">{description}</p>
        <a href="#" className="text-black flex items-center justify-center">
         {trial} <img src={ArrowSvg} className=' ml-1'/>
        </a>
      </div>
    );
  };
export default ProductBar