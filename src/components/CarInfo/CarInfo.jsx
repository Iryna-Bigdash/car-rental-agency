import {
  CarInfoContainer,
  Condition,
  Description,
  Detailes,
  Divider,
  Functionalities,
  Image,
  Item,
  Title,
} from './CarInfo.styled';
import placeholderImage from '../../assets/images/car-rental-placeholder.jpg';
import { Button } from 'components/CarCard/CarCard.styled';

export const CarInfo = ({ car }) => {
  console.log(car);
  const imageSrc = car.img || placeholderImage;
  const addressParts = car.address.split(', ');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();
  //   const carType = rentalCompany.split(' ')[0];

  return (
    <CarInfoContainer key={car.id}>
      <Image src={imageSrc} alt={`${car.make} ${car.model}`} />
      <ul>
        <Item>
          <Title>
            {car.make} <span style={{ color: '#3470FF' }}>{car.model}</span>,{' '}
            {car.year}
          </Title>
          <Detailes>
            {country}
            <Divider>|</Divider>
            {city}
            <Divider>|</Divider>Id: {car.mileage}
            <Divider>|</Divider>Year: {car.year}
            <Divider>|</Divider>Type: {car.type}
          </Detailes>
          <Detailes>
            Fuel Consumption: {car.fuelConsumption}
            <Divider>|</Divider>
            Engine Size: {car.engineSize}
          </Detailes>
        </Item>
        <Item>
          <Description>{car.description}</Description>
        </Item>

        <Item>
          <Functionalities>Accessories and functionalities:</Functionalities>
          <Detailes>
            {car.accessories[0]}
            <Divider>|</Divider>
            {car.accessories[1]}
            <Divider>|</Divider>
            {car.accessories[2]}
            <Divider>|</Divider>
            {car.functionalities[0]}
            <Divider>|</Divider>
            {car.functionalities[1]}
            <Divider>|</Divider>
            {car.functionalities[2]}
          </Detailes>
        </Item>
        <Item>
          <Functionalities>Rental Conditions:</Functionalities>
          <Condition>Minimum age : <span style={{ color: '#3470FF' }}>25</span></Condition>
          <Condition>Valid driver’s license</Condition>
          <Condition>Security deposite required </Condition>
          <Condition>Mileage: <span style={{ color: '#3470FF' }}>{car.mileage}</span></Condition>
          <Condition>Price: <span style={{ color: '#3470FF' }}>{car.rentalPrice}</span></Condition>
        </Item>
      </ul>
      <Button type="button" style={{ width: '168px', height: "44px" }}>Rental car</Button>
    </CarInfoContainer>
  );
};
