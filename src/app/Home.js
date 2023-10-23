import React from 'react';
import Banner from '@/Components/Home/Banner';
import Hero from '@/Components/Home/Hero';
import Navbar from '@/Components/Shared/Navbar';
import Blogs from '@/Components/Home/Blog/Blogs';
import Vidoes from '@/Components/Home/Videos/Vidoes';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
      <Blogs></Blogs>
      <Vidoes></Vidoes>
    </div>
  );
};

export default Home;