import Reactc, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailSect from './components/sections/ProductDetailSect'
import ProductSlider from './components/sections/ProductSlider'
import ContactSect from './components/sections/ContactSect'
import BreadCrumb from './components/sections/BreadCrumb'

const ProductDetail = () => {


  const params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log('ProductDetail');
    getProduct();
  }, [params]);

  const getProduct = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${params.slug}`);
    result = await result.json();
    if (result.status) {
      setProduct(result.product);
    }
  }

  return (
    <>
      <BreadCrumb name={product.name} />
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
