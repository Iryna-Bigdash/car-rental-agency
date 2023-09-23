import { NavLink, Route, Routes } from 'react-router-dom';

import { CarsList } from './CarsList/CarsList';
import cars from '../cars.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Dropdown from './Dropdown/Dropdown';
import { Filter } from './Filter/Filter';
import Modal from './Modal/Modal';
import Home from 'pages/Home';
import Cars from 'pages/Cars';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Layout>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/catalog/:carId" element={< Modal />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Filter data={cars}/>
      <Dropdown />
       */}

      <GlobalStyle />
    </Layout>
  );
};
