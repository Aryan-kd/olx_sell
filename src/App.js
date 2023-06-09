import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Login,
  HomePage,
  ProductPage,
  ProfilePage,
  ProductUpload,
} from './pages';
import { NavbarComponent, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route exact path={'/'} element={<HomePage />} />
        <Route path={'/search/:keyword'} element={<HomePage />} />
        <Route exact path={'/product/:id'} element={<ProductPage />} />
        <Route exact path={'/user/profile'} element={<ProfilePage />} />
        <Route exact path={'/sell'} element={<ProductUpload />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
