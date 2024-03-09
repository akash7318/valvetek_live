import React from 'react';
import { useState } from 'react';
import './Nav.css';
import MenuList from './MenuList';
import Socials from './Socials';
import Btn_link from '../Btn_link';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Nav = () => {

    const [isOpen, setIsopen] = useState(false);
    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }

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
                                        <li><PermPhoneMsgIcon /><a href="">+91 00000 0000</a></li>
                                        <li><ForwardToInboxIcon /><a href="">mail@company.com</a>
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
                                <div className='logo-box'> <a href=''><img src='./images/logo-valvetek.png' alt='' /></a> </div>
                                <div className='Mainmenu'>
                                    {/* menu list appear here */}
                                    <MenuList />
                                </div>
                                <Btn_link Href="" addClass='' btnName="Request Quote" />
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
                 <div className='logo-box'> <a href=''><img src='./images/logo-valvetek.png' alt='' /></a> </div>
                 {/* menu list appear here for mobile*/}
                 <MenuList />
               </div>
               <div>
                 {/* socials */}
                 <div className="cstm-socials"><Socials /></div>
               </div>
            </div>
        </>
    );

}


export default Nav
