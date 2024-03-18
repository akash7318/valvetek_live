import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Nav from '../components/nav/Nav';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Sitemap from '../Sitemap';
import ProductDetail from '../ProductDetail';
import Footer from '../components/sections/Footer';
import MarketPlace from '../MarketPlace';

function SiteLayout() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/company-profile' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/sitemap' element={<Sitemap />} />
                {
                    products
                        ?
                        products.map((value, index) =>
                            <Route key={index} path={'/:slug'} element={<ProductDetail />} />
                        )
                        :
                        null
                }
                <Route path='/market-place' element={<MarketPlace />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default SiteLayout