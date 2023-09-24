import PropTypes from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import { Item, List } from './CarsList.styled';
import { useState } from 'react';

export const CarsList = ({ cars }) => {
  const [activeCardInd, setActiveCardInd] = useState(null);

  const setActiveInd = (index) => {
    setActiveCardInd(index);
  };

  return (
    <List>
      {cars.map((car, index )=> {
        return (
          <Item key={car.id}
          className={index === activeCardInd ? 'active' : ''}
          onMouseMove={() => setActiveInd(index)}
          >
            <CarCard item={car} />
          </Item>
        );
      })}
    </List>
  );
};

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
