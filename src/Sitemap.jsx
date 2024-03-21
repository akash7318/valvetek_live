import React from 'react'
import SitemapSect from './components/sections/SitemapSect'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from "react-helmet";

const Sitemap = () => {
  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sitemap Page</title>
      </Helmet>
      <BreadCrumb name="Sitemap" />
      <SitemapSect />
    </>

  )
}

export default Sitemap
