import React from 'react'
import BreadCrumb from './components/sections/BreadCrumb'
import { Helmet } from "react-helmet";

function MarketPlace() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Market Page</title>
            </Helmet>
            <BreadCrumb name="Market Place" />
        </>
    )
}

export default MarketPlace