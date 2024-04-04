"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Catalog = ({ shirts }) => {
  const [searchFilterTemp, setSearchFilterTemp] = useState('');
  const [sizeFilterTemp, setSizeFilterTemp] = useState('');
  const [colorFilterTemp, setColorFilterTemp] = useState('');
  const [genderFilterTemp, setGenderFilterTemp] = useState('');
  const [minPriceFilterTemp, setMinPriceFilterTemp] = useState('');
  const [maxPriceFilterTemp, setMaxPriceFilterTemp] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');

  const handleSearchChange = (event) => {
    setSearchFilterTemp(event.target.value);
  };

  const handleSizeFilterChange = (event) => {
    setSizeFilterTemp(event.target.value);
  };

  const handleColorFilterChange = (event) => {
    setColorFilterTemp(event.target.value);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilterTemp(event.target.value);
  };

  const handleMinPriceFilterChange = (event) => {
    setMinPriceFilterTemp(event.target.value);
  };

  const handleMaxPriceFilterChange = (event) => {
    setMaxPriceFilterTemp(event.target.value);
  };

  const handleFilterButtonClick = () => {
    setSizeFilter(sizeFilterTemp);
    setColorFilter(colorFilterTemp);
    setGenderFilter(genderFilterTemp);
    setSearchFilter(searchFilterTemp);
    setMinPriceFilter(minPriceFilterTemp);
    setMaxPriceFilter(maxPriceFilterTemp);
    setIsFilterApplied(true);
  };

  const filteredShirts = shirts.filter((shirt) => {
    const nameMatch = shirt.name.toLowerCase().includes(searchFilter.toLowerCase());
    const sizeMatch = sizeFilter === '' || shirt.size === sizeFilter;
    const colorMatch = colorFilter === '' || shirt.color.toLowerCase().includes(colorFilter.toLowerCase());
    const genderMatch = genderFilter === '' || shirt.gender === genderFilter;
    const priceMatch = (minPriceFilter === '' || parseFloat(shirt.price) >= parseFloat(minPriceFilter)) &&
                        (maxPriceFilter === '' || parseFloat(shirt.price) <= parseFloat(maxPriceFilter));
    
    if (isFilterApplied) {
      return nameMatch && sizeMatch && colorMatch && genderMatch && priceMatch;
    } else {
      return true;
    }
  });

  return (
    <div>
      <div className='flex flex-col md:flex-row md:gap-3'>
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={searchFilterTemp}
          onChange={handleSearchChange}
          className="p-2 mb-4 border border-gray-300 bg-slate-500 rounded-lg"
        />
        <select
          value={sizeFilterTemp}
          onChange={handleSizeFilterChange}
          className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg"
        >
          <option value="">Tamanho</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="Infantil">Infantil</option>
        </select>
        <input
          type="text"
          placeholder="Pesquisar por cor..."
          value={colorFilterTemp}
          onChange={handleColorFilterChange}
          className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg"
        />
        <select
          value={genderFilterTemp}
          onChange={handleGenderFilterChange}
          className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg"
        >
          <option value="">Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <input
          type="text"
          placeholder="Preço mínimo"
          value={minPriceFilterTemp}
          onChange={handleMinPriceFilterChange}
          className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg"
        />
        <input
          type="text"
          placeholder="Preço máximo"
          value={maxPriceFilterTemp}
          onChange={handleMaxPriceFilterChange}
          className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg"
        />
        <button onClick={handleFilterButtonClick} className="p-2 mb-4 bg-slate-800 text-white rounded-lg">Filtrar</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredShirts.map((shirt) => (
          <div key={shirt.id} className="border p-4 rounded-lg shadow-md cursor-pointer">
            <Link href={`/products/${shirt.id}`}>
              <img
                src={`/data_img/${shirt.image}`}
                alt={shirt.name}
                className="h-auto sm:h-[240px] md:h-[200px] lg:h-[160px] xl:h-[320px] w-full cursor-pointer"
              />
            </Link>
            <h2 className="text-lg text-gray-700 font-semibold">{shirt.name}</h2>
            <p className="text-gray-600">Preço: R${shirt.price}</p>
            <p className="text-gray-600">Tamanho: {shirt.size}</p>
            <p className="text-gray-600">Cor: {shirt.color}</p>
            <p className="text-gray-600">Sexo: {shirt.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
