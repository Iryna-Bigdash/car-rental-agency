import React, { useState } from 'react';

export const Filter = ({ data }) => {
  const initialValues = {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  // Use state to store the filter values
  const [filters, setFilters] = useState(initialValues);

  const brands = [...new Set(data.map(item => item.make))];
  const prices = [
    ...new Set(
      data.map(item => parseFloat(item.rentalPrice.replace(/\D/g, '')))
    ),
  ].sort((a, b) => a - b);

  // const mileagesFrom = [
  //   ...new Set(data.map(item => parseFloat(item.mileage.replace(/\D/g, '')))),
  // ];

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // Update the filter values when an input changes
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
  };

  return (
    <form name="filter" onSubmit={handleSubmit}>
      <label>Car brand</label>
      <select name="brand" onChange={handleChange} value={filters.brand}>
        <option value="">Enter the text</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <label>
        Price/ 1 hour
        <select name="price" onChange={handleChange} value={filters.price}>
          <option value="">To $</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      <label>
        Car mileage / km
        <input
          type="text"
          name="mileageFrom"
          placeholder="From"
          value={filters.mileageFrom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mileageTo"
          placeholder="To"
          value={filters.mileageTo}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
