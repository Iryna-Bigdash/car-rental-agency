// import { BrowserRouter } from "react-router-dom";

import { CarsList } from "./CarsList/CarsList";
import cars from '../cars.json'
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import Dropdown from "./Dropdown/Dropdown";
import { Filter } from "./Filter/Filter";



export const App = () => {
  
  return (
    // <BrowserRouter basename="/react-template">
    <Layout>
      <Filter data={cars}/>
      <Dropdown />
      <CarsList items={cars} />
      <GlobalStyle />
    </Layout>
    // </BrowserRouter>
  );
};
