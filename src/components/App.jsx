import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import Home from 'pages/Home';
import Cars from 'pages/Cars';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Cars />} />
        <Route path="catalog/:carId" element={< Modal />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};
