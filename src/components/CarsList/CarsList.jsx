import PropTypes from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import { Item, List } from './CarsList.styled';

export const CarsList = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <Item key={item.id}>
            <CarCard item={item} />
          </Item>
        );
      })}
    </List>
  );
};

CarsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
