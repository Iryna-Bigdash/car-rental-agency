import { useParams } from 'react-router-dom';
import { Backdrop, Container } from './Modal.styled';
import { CarInfo } from 'components/CarInfo/CarInfo';
import { getCarById } from 'fakeAPI';

const Modal = ({ onClose }) => {
    const { carId } = useParams();
    const car = getCarById(carId);
  
  console.log(onClose)
    
  return (
    <Backdrop>
      <Container>
        <button type='button' >Close</button>
        <CarInfo  car={car}/>
      </Container>
    </Backdrop>
  );
};

export default Modal;