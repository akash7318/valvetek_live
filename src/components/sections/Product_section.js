import React from 'react';
import './Product_section.css';
import Section_title from '../Section_title';
import Product_card from '../Product_card';

const Product_section = () => {
  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='text-center m-b40'>
            <Section_title smTitle="All Products" mainTitle="Tristique ultricies malesuada dictum posuere" />
        </div>
        <div className='row'>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name one" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name two" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name three" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name four" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name five" /></div>
            <div className=' col-lg-4 col-md-6 m-b30'><Product_card productName="Product name six" /></div>
        </div>
      </div>
    </section>
  )
}

export default Product_section
