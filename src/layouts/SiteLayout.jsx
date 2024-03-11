import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Nav from '../components/nav/Nav';
import Home from '../Home';
import About from '../About';
import Footer from '../components/sections/Footer';

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
                <Route path='/about' element={<About />} />
                {
                    products
                        ?
                        products.map((value, index) =>
                            <Route key={index} path={'/' + value.slug} element={<About />} />
                        )
                        :
                        null
                }
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default SiteLayout