import React, { useEffect, useState } from 'react';
import './Product_section.css';
import Section_title from '../Section_title';
import Product_card from '../Product_card';

const Product_section = () => {

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

  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='text-center m-b40'>
          <Section_title smTitle="All Products" mainTitle="Explore Our Wide Range Of Products" />
        </div>
        <div className='row'>
          {
            products
              ?
              products.map((value, index) =>
                <div key={index} className='col-lg-4 col-md-6 m-b30'>
                  <Product_card productName={value.name} productSlug={'/'} productImg={value.img} />
                </div>
              )
              :
              null
          }
        </div>
      </div>
    </section>
  )
}

export default Product_section
