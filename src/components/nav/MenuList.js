import React from 'react';
import { Link } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';

const MenuList = (props) => {

    let subdomain;
    if (props.subdomain !== undefined && props.subdomain.length > 0) {
        subdomain = props.subdomain;
    }

    return (
        <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <HasChildMenu subdomain={subdomain} />
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
