import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HasChildMenu = (props) => {

    const [products, setProduct] = useState([]);
    const [promotionalCategory, setPromotionalCategory] = useState([]);

    useEffect(() => {
        getProducts();
        if (props.subdomain !== undefined && props.subdomain.length > 0) {
            getPromotionalCategory(props.subdomain);
        }
    }, []);

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    const getPromotionalCategory = async (subdomain) => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}promotionalCategory/${subdomain}`)
        result = await result.json();
        if (result.status) {
            setPromotionalCategory(result.promotionalCategory);
        }
    }

    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    return (
        <li className='hasChild'><Link to="/products">Products</Link><i onClick={toggleDropdown} className="fa-solid fa-angle-down"></i>
            <ul className={isOpen ? 'active' : ''}>
                {
                    products
                        ?
                        products.map((value, index) =>
                            <li key={index}>
                                <a
                                    href={value.slug}
                                // href={(
                                //     (promotionalCategory && promotionalCategory.slug)
                                //         ?
                                //         promotionalCategory.slug
                                //         :
                                //         ""
                                // ) + "/" + value.slug}
                                >{value.name}
                                </a></li>
                        )
                        :
                        null
                }
            </ul>
        </li>
    )
}

export default HasChildMenu
