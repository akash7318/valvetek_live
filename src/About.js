import React from 'react';
import Company_profile from './components/sections/Company_profile';
import BreadCrumb from './components/sections/BreadCrumb';
import ContactSect from './components/sections/ContactSect';
import Sitemap from './components/sections/Sitemap';
import ProductSlider from './components/sections/ProductSlider';
import ProductDetailSect from './components/sections/ProductDetailSect';

const About = () => {
  return (
    <>
      <BreadCrumb />
      <Company_profile/>
      <ProductSlider />
      <ProductDetailSect />
      <ContactSect />
      <Sitemap />
    </>
  )
}

export default About
