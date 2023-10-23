import React from 'react';
import Banner from '@/Components/Home/Banner';
import Hero from '@/Components/Home/Hero';
import Navbar from '@/Components/Shared/Navbar';
import Blogs from '@/Components/Home/Blog/Blogs';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;