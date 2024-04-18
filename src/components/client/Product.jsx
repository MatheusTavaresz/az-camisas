import React from 'react';
import Link from 'next/link';

const Product = ({ shirt }) => (
 <div key={shirt.id} className="border p-4 rounded-lg shadow-md cursor-pointer">
    <Link href={`/products/${shirt.id}`}>
    
        <img
          src={`/data_img/${shirt.image}`}
          alt={shirt.name}
          className="w-full h-[230px] rounded-lg"
        />
     
    </Link>
    <h2 className="text-lg text-gray-700 font-semibold mt-2">{shirt.name}</h2>
    <p className="text-gray-600">Preço: R${shirt.price}</p>
    <p className="text-gray-600">Tamanho: {shirt.size}</p>
    <p className="text-gray-600">Cor: {shirt.color}</p>
    <p className="text-gray-600">Sexo: {shirt.gender}</p>
 </div>
);

export default Product;
