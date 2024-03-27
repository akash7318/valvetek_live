import React, { useState, useEffect } from 'react';
import ContactSect from './components/sections/ContactSect';
import BreadCrumb from './components/sections/BreadCrumb';
import SubdomainSec from './components/sections/SubdomainSec';
import HelmetComp from './components/HelmetComp';

function Subdomain(props) {

    const [subdomain, setSubdomain] = useState([]);

    useEffect(() => {
        getSubdomain();
        let pathname = window.location.pathname.split('/')[1];
        props.subdomain(pathname);
    }, []);

    const getSubdomain = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}subdomain/${props.categorySlug}/${props.productSlug}`);
        result = await result.json();
        if (result.status) {
            setSubdomain(result.subdomain);
        }
    }

    return (
        <>
            <HelmetComp data={subdomain} />
            <BreadCrumb name={subdomain.shortDescription} />
            <SubdomainSec subdomain={subdomain} />
            <ContactSect />
        </>
    )
}

export default Subdomain