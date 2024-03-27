import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import '../App.css';
// import Nav from '../components/nav/Nav';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Sitemap from '../Sitemap';
import ProductDetail from '../ProductDetail';
import Footer from '../components/sections/Footer';
import MarketPlace from '../MarketPlace';
import Products from '../Products';
import ProductList from '../components/sections/ProductList';
import Subdomain from '../Subdomain';
import OurPresenceInCity from '../OurPresenceInCity';

function SiteLayout() {

    const [products, setProduct] = useState([]);
    const [locations, setLocations] = useState([]);
    const [promotionalCategories, setPromotionalCategories] = useState([]);
    const [subdomain, setSubdomain] = useState([]);

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    const getMarketPlace = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}marketPlace`);
        result = await result.json();
        if (result.status) {
            setLocations(result.data.locations);
            setPromotionalCategories(result.data.promotionalCategories);
        }
    }

    useEffect(() => {
        getProducts();
        getMarketPlace();
    }, [])

    return (
        <>
            {/* <Nav name={subdomain} /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/company-profile' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/sitemap' element={<Sitemap />} />
                <Route path='/market-place' element={<MarketPlace />} />
                {
                    products
                        ?
                        products.map((value, index) =>
                            <Route key={index} path={'/' + value.slug} element={<ProductDetail slug={value.slug} />} />
                        )
                        :
                        null
                }
                {
                    promotionalCategories
                        ?
                        promotionalCategories.map((value, index) =>
                            <>
                                <Route
                                    key={index}
                                    path={'/' + value.slug}
                                    element={<ProductList slug={value.slug} />}
                                />
                                {
                                    products
                                        ?
                                        products.map((item, key) =>
                                            <Route
                                                key={key}
                                                path={'/' + value.slug + "/" + item.slug}
                                                element={<Subdomain subdomain={setSubdomain} categorySlug={value.slug} productSlug={item.slug} />}
                                            />
                                        )
                                        :
                                        null
                                }
                            </>
                        )
                        :
                        null
                }
                {
                    locations
                        ?
                        locations.map((value, index) =>
                            <>
                                <Route key={index} path={'/' + value.parantSlug} element={<OurPresenceInCity slug={value.parantSlug} />} />
                                {
                                    value.cities.map((item, key) =>
                                        <Route key={key} path={'/' + item.slug} element={<OurPresenceInCity slug={item.slug} />} />
                                    )
                                }
                            </>
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