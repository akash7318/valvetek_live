import React, { useState, useEffect } from 'react'

function ProductData() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    });

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        if (result.status) {
            setProducts(result.products);
        }
    }

    return products;
}

export default ProductData