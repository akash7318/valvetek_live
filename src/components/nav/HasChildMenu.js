import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HasChildMenu = (props) => {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }


    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    return (
        <li className='hasChild'><Link to="/">Products</Link><i onClick={toggleDropdown} className="fa-solid fa-angle-down"></i>
            <ul className={isOpen ? 'active' : ''}>
                {
                    products
                        ?
                        products.map((value, index) =>
                            <li key={index}><Link to={'/'}>{value.name}</Link></li>
                        )
                        :
                        null
                }
            </ul>
        </li>
    )
}

export default HasChildMenu
