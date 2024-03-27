import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailSect from './components/sections/ProductDetailSect';
import ProductSlider from './components/sections/ProductSlider';
import ContactSect from './components/sections/ContactSect';
import BreadCrumb from './components/sections/BreadCrumb';
import { Helmet } from "react-helmet";
import HelmetComp from './components/HelmetComp';

const ProductDetail = (props) => {

  const params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [params]);

  const getProduct = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${props.slug}`);
    result = await result.json();
    if (result.status) {
      setProduct(result.product);
    }
  }

  return (
    <>
      <HelmetComp data={product} />
      <BreadCrumb name={product.name} />
      <ProductDetailSect slug={props.slug} />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
