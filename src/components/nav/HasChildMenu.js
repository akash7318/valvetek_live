import React from 'react';
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

const HasChildMenu = (props) => {

    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    return (
        <li className='hasChild'><Link to="/">Products</Link><i onClick={toggleDropdown} className="fa-solid fa-angle-down"></i>
            <ul className={isOpen ? 'active' : ''}>
                <li><a href="#">Product name lorem</a></li>
                <li><a href="#">Product name lorem</a></li>
                <li><a href="#">Product name lorem</a></li>
                <li><a href="#">Product name lorem</a></li>
                <li><a href="#">Product name lorem</a></li>
            </ul>
        </li>
    )
}

export default HasChildMenu
