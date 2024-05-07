import React, { useState, useEffect } from 'react';
import Company_profile from './components/sections/Company_profile';
import BreadCrumb from './components/sections/BreadCrumb';
import ContactSect from './components/sections/ContactSect';
import Sitemap from './components/sections/SitemapSect';
import ProductSlider from './components/sections/ProductSlider';
import ProductDetailSect from './components/sections/ProductDetailSect';
import { Helmet } from "react-helmet";
import HelmetComp from './components/HelmetComp';
import Nav from './components/nav/Nav';
import Footer from './components/sections/Footer';

const About = () => {


  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}about`);
    result = await result.json();
    if (result.status) {
      setAboutData(result.about);
    }
  }

  return (
    <>
      <Nav />
      <HelmetComp data={aboutData} />
      <BreadCrumb name={aboutData.name} />
      <Company_profile pageData={aboutData} hTwoTitle={aboutData.shortDescription}/>
      <ContactSect />
      <Footer />
    </>
  )
}

export default About
