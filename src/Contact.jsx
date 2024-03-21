import React from 'react'
import ContactSect from './components/sections/ContactSect'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
      </Helmet>
      <BreadCrumb name="Contact Us" />
      <ContactSect />
    </>
  )
}

export default Contact
