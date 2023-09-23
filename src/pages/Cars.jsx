import { getCars } from "fakeAPI";
const { CarsList } = require("components/CarsList/CarsList");


const Cars =()=> {

    // useEffect(()=>{http}, [])
    const cars = getCars();

   return (
    <CarsList cars = {cars} />
   ) 
}

export default Cars;