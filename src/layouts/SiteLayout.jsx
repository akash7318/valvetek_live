import React from 'react'
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Nav from '../components/nav/Nav';
import Home from '../Home';
import About from '../About';
import Footer from '../components/sections/Footer';

function SiteLayout() {
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default SiteLayout