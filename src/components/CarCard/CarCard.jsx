import PropTypes from 'prop-types';
import { CiHeart } from 'react-icons/ci';
import placeholderImage from '../../assets/images/car-rental-placeholder.jpg';
import {
  Button,
  Description,
  DescriptionList,
  Icon,
  Image,
  Model,
  Price,
  Section,
  Title,
  TitleThumb,
} from './CarCard.styled';

export const CarCard = ({
  item: {
    img,
    description,
    rentalPrice,
    make,
    model,
    year,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  },
}) => {
  const imageSrc = img || placeholderImage;

  const addressParts = address.split(', ');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();
  const carType = rentalCompany.split(' ')[0];

  return (
    <Section>
      <Icon type="button" label="heart icon">
        <CiHeart size={18} />
      </Icon>
      <Image src={imageSrc} alt={description} loading="lazy" />
      <TitleThumb>
        <Title>
          {make}
          <Model>{model}</Model>, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </TitleThumb>
      <DescriptionList>
        <Description>{city}</Description>
        <Description>{country}</Description>
        <Description>{rentalCompany}</Description>
        <Description>{carType}</Description>
        <Description>{type}</Description>
        <Description>{model}</Description>
        <Description>{mileage}</Description>
        <Description>{functionalities[0]}</Description>
      </DescriptionList>
      <Button type="button" label="Learn more">
        Learn more
      </Button>
    </Section>
  );
};

CarCard.protoTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.string.isRequired,
  }).isRequired,
};
