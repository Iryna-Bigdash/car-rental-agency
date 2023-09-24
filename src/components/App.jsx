import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import Home from 'pages/Home';
import Gallery from 'pages/Gallery';
import Favorite from 'pages/Favorite';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Gallery />} />
        <Route path="catalog/:carId" element={< Modal />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};
