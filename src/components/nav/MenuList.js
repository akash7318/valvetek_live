import React from 'react';
import { Link } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';

const MenuList = (props) => {

    return (
        <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <HasChildMenu data={props.data} />
            {/* <li><Link to="/sitemap">Sitemap</Link></li> */}
            <li><Link to="/sitemap">Sitemap</Link></li>
            {/* <li><Link to="/company-profile">Company Profile</Link></li> */}
            <li><Link to="/company-profile">Company Profile</Link></li>
            {/* <li><Link to="/contact">Contact Us</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    )
}

export default MenuList
