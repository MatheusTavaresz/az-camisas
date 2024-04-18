import React from 'react';
import Catalog from '@/components/client/Catalog';
import shirtsData from '@/data/shirts'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-slate-700 font-semibold mb-4">Patrick Shirts</h1>
      <Catalog shirts={shirtsData} />
    </div>
  );
};

export default Home;
