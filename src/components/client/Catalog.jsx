'use client'
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import ProductList from './ProductList';

const Catalog = ({ shirts }) => {
 const [filters, setFilters] = useState({
    filterByName: '',
    filterByColor: '',
    filterBySize: '',
    filterByMinPrice: '',
    filterByMaxPrice: '',
 });

 const [shouldApplyFilters, setShouldApplyFilters] = useState(false);
 const [filteredShirts, setFilteredShirts] = useState(shirts);

 const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
 };

 const handleFilterButtonClick = () => {
    setShouldApplyFilters(true);
 };

 const applyFilters = (shirt) => {
    const { filterByName, filterByColor, filterBySize, filterByMinPrice, filterByMaxPrice } = filters;

    const nameMatch = shirt.name.toLowerCase().includes(filterByName.toLowerCase());
    const sizeMatch = shirt.size.toLowerCase().includes(filterBySize.toLowerCase());
    const colorMatch = shirt.color.toLowerCase().includes(filterByColor.toLowerCase());
    const priceMatch = (filterByMinPrice === '' || parseFloat(shirt.price) >= parseFloat(filterByMinPrice)) &&
      (filterByMaxPrice === '' || parseFloat(shirt.price) <= parseFloat(filterByMaxPrice));

    return nameMatch && sizeMatch && colorMatch && priceMatch;
 };

 useEffect(() => {
    if (shouldApplyFilters) {
      const newFilteredShirts = shirts.filter(applyFilters);
      setFilteredShirts(newFilteredShirts);
      setShouldApplyFilters(false);
    }
 }, [shouldApplyFilters, shirts, filters]);

 return (
    <div>
      <Filter filters={filters} onChange={handleFilterChange} onApply={handleFilterButtonClick} />
      <ProductList shirts={filteredShirts} />
    </div>
 );
};

export default Catalog;
