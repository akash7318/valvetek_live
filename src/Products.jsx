import React from 'react'
import Product_section from './components/sections/Product_section'
import ContactSect from './components/sections/ContactSect'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from 'react-helmet'
import Nav from './components/nav/Nav';

function Products() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title></title>
            </Helmet>
            <Nav />
            <BreadCrumb name="Products" />
            <Product_section />
            <ContactSect />
        </>
    )
}

export default Products