import React from 'react';
import Product from './Product';

const ProductList = ({ shirts }) => (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
    {shirts.map((shirt) => (
      <Product key={shirt.id} shirt={shirt} />
    ))}
 </div>
);

export default ProductList;
