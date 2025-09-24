import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DeliveryAreas from '../components/DeliveryAreas';
import Certifications from 'src/components/Certifications.tsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Certifications />
      <DeliveryAreas />
    </>
  );
};

export default Home;
