import React from 'react'
import SitemapSect from './components/sections/SitemapSect'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from "react-helmet";
import Nav from './components/nav/Nav';
import Footer from './components/sections/Footer';

const Sitemap = () => {
  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sitemap Page</title>
      </Helmet>
      <Nav />
      <BreadCrumb name="Sitemap" />
      <SitemapSect />
      <Footer />
    </>

  )
}

export default Sitemap
