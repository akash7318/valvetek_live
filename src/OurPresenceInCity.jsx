import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import BreadCrumb from './components/sections/BreadCrumb'
import OurPresenceInCitySec from './components/sections/OurPresenceInCitySec';
import HelmetComp from './components/HelmetComp';
import Nav from './components/nav/Nav';

function OurPresenceInCity(props) {

    const [ourPresenceInCity, setOurPresenceInCity] = useState([]);

    useEffect(() => {
        getOurPresenceInCity();
    }, []);

    const getOurPresenceInCity = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}ourPresenceInCity/${props.slug}`);
        result = await result.json();
        if (result.status) {
            setOurPresenceInCity(result.ourPresenceInCity);
        }
    }

    return (
        <>
            <HelmetComp data={ourPresenceInCity} />
            <Nav />
            <BreadCrumb name={ourPresenceInCity.shortDescription} />
            <OurPresenceInCitySec data={ourPresenceInCity} />
        </>
    )
}

export default OurPresenceInCity