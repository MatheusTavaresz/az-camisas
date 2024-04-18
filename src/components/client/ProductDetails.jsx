import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 
import shirts from '@/data/shirts';

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  const shirt = shirts.find((item) => item.id === parseInt(productId));

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-8'>
        <Link href="/">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg">
            Voltar para a página inicial
          </button>
        </Link>
      </div>

      <div className='mt-8 p-8 bg-slate-100 rounded-lg shadow-lg'>
        <h1 className="text-2xl text-slate-700 font-semibold mb-4">Detalhes do Produto</h1>
        {shirt && (
          <div className='flex flex-col md:flex-row items-center md:items-start'>
            <div className='mb-4 md:mr-8'>
              <img
                src={`/data_img/${shirt.image}`}
                alt={shirt.name}
                className="w-64 h-auto md:w-auto"
              />
            </div>
            <div>
            <p className='text-lg text-slate-500 font-semibold mb-2'>Nome: <span className='text-lg text-slate-700 font-semibold mb-2'>{shirt.name}</span></p>
              <p className='text-lg text-slate-500 font-semibold mb-2'>Preço: <span className='text-lg text-slate-700 font-semibold mb-2'>R$ {shirt.price}</span></p>
              <p className='text-lg text-slate-500 font-semibold mb-2'>Tamanho: <span className='text-lg text-slate-700 font-semibold mb-2'>{shirt.size}</span></p>
              <p className='text-lg text-slate-500 font-semibold mb-2'>Gênero: <span className='text-lg text-slate-700 font-semibold mb-2'>{shirt.gender}</span></p>
              <p className='text-lg text-slate-500 font-semibold mb-2'>Cor: <span className='text-lg text-slate-700 font-semibold mb-2'>{shirt.color}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
