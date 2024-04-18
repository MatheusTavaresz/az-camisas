import React from 'react';

const Filter = ({ filters, onChange, onApply }) => {
 const handleChange = (key, event) => {
    onChange(key, event.target.value);
 };

 return (
    <div className='flex gap-1 flex-wrap'>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={filters.filterByName}
        onChange={(e) => handleChange('filterByName', e)}
        className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg w-full md:w-auto"
      />
      <input
        type="text"
        placeholder="Pesquisar por cor"
        value={filters.filterByColor}
        onChange={(e) => handleChange('filterByColor', e)}
        className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg w-full md:w-auto"
      />
      <select
        value={filters.filterBySize}
        onChange={(e) => handleChange('filterBySize', e)}
        className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg w-full md:w-auto"
      >
        <option value=''> </option>
        <option value='p'>P</option>
        <option value='M'>M</option>
        <option value='G'>G</option>
        <option value='Infantil'>Infantil</option>
      </select>
      <input
        type="text"
        placeholder="Pesquisar por preço mínimo"
        onChange={(e) => handleChange('filterByMinPrice', e)}
        className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg w-full md:w-auto"
      />
      <input
        type="text"
        placeholder="Pesquisar por preço máximo"
        onChange={(e) => handleChange('filterByMaxPrice', e)}
        className="p-2 mb-4 border border-gray-300 font-white bg-slate-500 rounded-lg w-full md:w-auto"
      />
      <button onClick={onApply} className="p-2 mb-4 bg-slate-800 text-white rounded-lg w-full md:w-auto">Filtrar</button>
    </div>
 );
};

export default Filter;
