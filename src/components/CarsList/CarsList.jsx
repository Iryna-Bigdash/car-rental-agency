import PropTypes from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import { Item, List } from './CarsList.styled';

export const CarsList = ({ cars }) => {

  return (
    <List>
      {cars.map(car => {
        return (
          <Item key={car.id}>
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
