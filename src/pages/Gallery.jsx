import { Filter } from 'components/Filter/Filter';
import { getCars } from 'fakeAPI';
const { CarsList } = require('components/CarsList/CarsList');

const Cars = () => {
  // useEffect(()=>{http}, [])
  const cars = getCars();

  const formSubmitHandler = (data) => {
    console.log(data)
  }

  return (
    <div style={{width: "1184px", padding: '0 150px', paddingTop:'150px'}}>
      <Filter data={cars} onSubmit={formSubmitHandler}/>
      <CarsList cars={cars} />
    </div>
  );
};

export default Cars;
