import React from 'react';
import Banner from '@/Components/Home/Banner';
import Hero from '@/Components/Home/Hero';
import Navbar from '@/Components/Shared/Navbar';
import Blogs from '@/Components/Home/Blog/Blogs';
import Vidoes from '@/Components/Home/Videos/Vidoes';
import Courses from '@/Components/Home/Course/Courses';
import Books from '@/Components/Home/Books/Books';
import Shop from '@/Components/Home/Shop/Shop';
import Podcast from '@/Components/Home/Podcast/Podcast';
import Success from '@/Components/Home/Success/Success';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
      <Blogs></Blogs>
      <Vidoes></Vidoes>
      <Courses></Courses>
      <Books></Books>
      <Shop></Shop>
      <Podcast></Podcast>
      <Success></Success>
    </div>
  );
};

export default Home;