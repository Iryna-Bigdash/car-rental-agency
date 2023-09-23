import { useParams } from 'react-router-dom';
import { Backdrop, Close, Container } from './Modal.styled';
import { CarInfo } from 'components/CarInfo/CarInfo';
import { getCarById } from 'fakeAPI';
import { HiXMark } from "react-icons/hi2";

const Modal = ({ onClose }) => {
    const { carId } = useParams();
    const car = getCarById(carId);
  
  console.log(onClose)
    
  return (
    <Backdrop>
      <Container>
        <Close type='button'><HiXMark size={24}/></Close>
        <CarInfo  car={car}/>
      </Container>
    </Backdrop>
  );
};

export default Modal;