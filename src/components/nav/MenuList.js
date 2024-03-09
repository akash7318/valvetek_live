import React from 'react';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';

const MenuList = () => {

    // const [isOpenChild, setIsopenChild] = useState(false);
    // const toggleDropdownChild = () => {
    //     setIsopenChild(!isOpenChild);
    // }

    return (
        <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <HasChildMenu />
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/about">Company Profile</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    )
}

export default MenuList
