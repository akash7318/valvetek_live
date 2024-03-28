import React from 'react'
import ContactSect from './components/sections/ContactSect'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from "react-helmet";
import Nav from './components/nav/Nav';
import Footer from './components/sections/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
      </Helmet>
      <Nav />
      <BreadCrumb name="Contact Us" />
      <ContactSect />
      <Footer />
    </>
  )
}

export default Contact
