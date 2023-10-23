import React from 'react';
import Banner from '@/Components/Home/Banner';
import Hero from '@/Components/Home/Hero';
import Navbar from '@/Components/Shared/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
    </div>
  );
};

export default Home;