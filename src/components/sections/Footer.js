import React from 'react';
import './Footer.css';
import Socials from '../nav/Socials';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
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
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Products</a></li>
                                        <li><a href="">Company Profile</a></li>
                                        <li><a href="">Sitemap</a></li>
                                        <li><a href="">Market Place</a></li>
                                        <li><a href="">Contact Us</a></li>
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
                                            <a href="">+91 0000 00000</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Email</span>
                                            <a href="">contact@company.com</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Address</span>
                                            <span>456, Loandon Street, lorem tisuml, 33454, India</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6'>
                                <div className='ft-logo-box'>
                                    <a href='' className='ft-logo'>
                                        {/* <img src="./images/logo-valvetek.png" alt="" /> */}
                                        Valvetek Engineering
                                    </a>
                                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse efficitur sit ut nullam egestas imperdiet netus? Rhoncus odio laoreet nisi aliquet per dui augue. Sollicitudin cras dictum ligula neque convallis laoreet, iaculis duis! Maecenas proin tincidunt tempus eget nec parturient luctus aliquet litora. Gravida curabitur maximus, conubia vivamus netus orci habitant fusce.</p>
                                    <a className='read-more-btn' href="">Readmore <span className='line'></span> <i className="fa-solid fa-angle-right"></i></a>

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
                                    <div className='copy-right-text'><span>Copyright © 2024. All Rights Reserved.</span><a href="">Company Name</a></div>
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
