import React, { useState, useEffect } from 'react';
import { Parser } from 'html-to-react'
import './Footer.css';
import Socials from '../nav/Socials';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const [siteInfo, setSiteInfo] = useState([]);
    const { pathname } = useLocation();

    // useEffect(() => {
    //     getSiteInfo();
    // }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        getSiteInfo();
    }, [pathname]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    return (
        <>
            <footer>
                <div className='Footer-top'>
                    <div className='container'></div>
                </div>
                <div className='footer-main'>
                    <div className='container'>
                        <div className='row justify-content-between'>

                            <div className='col-lg-2 col-md-6 m-t40'>
                                <div className='footer-widget'>
                                    <p className='title-ft'>Useful Links</p>
                                    <ul className='links'>
                                        <li><Link to={'/'}>Home</Link></li>
                                        <li><Link to={'/products'}>Products</Link></li>
                                        <li><Link to={'/company-profile'}>Company Profile</Link></li>
                                        <li><Link to={'/sitemap'}>Sitemap</Link></li>
                                        <li><Link to={'/market-place'}>Market Place</Link></li>
                                        <li><Link to={'/contact'}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 m-t40'>
                                <div className='footer-widget'>
                                    <p className='title-ft'>Contact Info</p>

                                    <div className='contacts-box m-t30'>
                                        <div className='cont-icn'><i className="fa-solid fa-phone-volume"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Phone</span>
                                            <a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a>
                                            <a href={"tel:" + siteInfo.secondaryPhone}>{siteInfo.secondaryPhone}</a>
                                            <a href="tel:+91 7003927392">+91 7003927392</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Email</span>
                                            <a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                            <a href={"mailto:" + siteInfo.secondaryMail}>{siteInfo.secondaryMail}</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Address</span>
                                            <span>{siteInfo.primaryAddress}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6'>
                                <div className='ft-logo-box'>
                                    <Link to='/' className='ft-logo'>
                                        {/* <img src="./images/logo-valvetek.png" alt="" /> */}
                                        {siteInfo.compName}
                                    </Link>
                                    {Parser().parse(siteInfo.footerText)}
                                    <Link to={'/contact'} className='read-more-btn'>Contact Us <span className='line'></span> <i className="fa-solid fa-angle-right"></i></Link>

                                    {/* Social links */}
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='copy-box'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 '>
                                    <div className='copy-right-text'><span>Copyright © 2024 by {siteInfo.compName} | Website Designed & Promoted by Insta Vyapar </span><a href="https://www.instavyapar.com/our-services/digital-marketing/google-promotion.html" target="_blank">Google Promotion Services</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='Scroll-top-btn'> <ScrollToTop smooth /></div>
        </>
    )
}

export default Footer
