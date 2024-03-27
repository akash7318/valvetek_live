import React, { useState, useEffect } from 'react';
import Home_banner from './components/sections/Home_banner';
import Features_sect from './components/sections/Features_sect';
import Company_profile from './components/sections/Company_profile';
import Product_section from './components/sections/Product_section';
import Why_choose_us from './components/sections/Why_choose_us';
import ContactSect from './components/sections/ContactSect';
import Testimonial from './components/sections/Testimonial';
import HelmetComp from './components/HelmetComp';

const Home = () => {

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}home`);
    result = await result.json();
    if (result.status) {
      setHomeData(result.home);
    }
  }

  return (
    <>
      <HelmetComp data={homeData} />
      <Home_banner />
      <Features_sect />
      <Company_profile pageData={homeData} homeTitle={homeData.shortDescription} />
      <Product_section />
      <Why_choose_us />
      {/* <Testimonial /> */}
      <ContactSect />
    </>
  )
}

export default Home
