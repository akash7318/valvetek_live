import React, { useEffect } from 'react';
import { useState } from 'react';
import './Nav.css';
import MenuList from './MenuList';
import Socials from './Socials';
import Btn_link from '../Btn_link';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const [isOpen, setIsopen] = useState(false);
    const [siteInfo, setSiteInfo] = useState([]);

    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    useEffect(() => {
        getSiteInfo();
    }, []);

    return (
        <>
            <header className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-topbar-content">
                                {/* socials */}
                                <div className="cstm-socials"><Socials /></div>

                                <div className="cstm-contact-infos">
                                    <ul>
                                        <li><PermPhoneMsgIcon /><a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a></li>
                                        <li><ForwardToInboxIcon /><a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='Navbar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='mainmenu-wrapper'>
                                <div className='logo-box'> <Link to={'/'}><img src={'./images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link> </div>
                                <div className='Mainmenu'>
                                    {/* menu list appear here */}
                                    <MenuList data={props.data} />
                                </div>
                                <Btn_link Href="/contact" addClass='' btnName="Request Quote" />
                                <span onClick={toggleSidenav} className='menuBtn'><i className="fa-solid fa-bars-staggered"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* menu for mobile*/}
            <div className={isOpen ? 'phone-nav-overlay active' : 'phone-nav-overlay'}>
                <span onClick={toggleSidenav} className='close-nav'><i className="fa-solid fa-xmark"></i></span>
                <div className='phone-nav'>
                    <div className='logo-box'> <Link to={'/'}><img src={'./images/' + siteInfo.img} alt={siteInfo.name} title={siteInfo.name} /></Link> </div>
                    {/* menu list appear here for mobile*/}
                    <MenuList />
                </div>
                <div>
                    {/* socials */}
                    <div className="cstm-socials">
                        <Socials />
                    </div>
                </div>
            </div>
        </>
    );

}


export default Nav
