import React from 'react'
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css'
import { products } from '../constants';
import ProductBar from '../components/ProductBar';


  const Products = () => {
    
    return (
        <div className="min-h-screen flex flex-col items-center mb-10">
        <h2 className="text-[32px] font-medium mb-20 mt-[150px]">More from HappyFox</h2>
        <div className="product-container grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductBar
              key={product.id}
              productImage={product.image}
              title={product.title}
              description={product.description}
              trial={product.trial}
            />
          ))}
        </div>
      </div>
    );
  };
  
  
  export default Products;
