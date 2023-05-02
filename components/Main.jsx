import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
  return (
    <View id='main'>
      <Navbar />
      <Outlet />
      <Footer />
    </View>
  );
};

export default Main;
