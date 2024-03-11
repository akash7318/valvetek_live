import React from 'react'
import ProductDetailSect from './components/sections/ProductDetailSect'
import ProductSlider from './components/sections/ProductSlider'
import ContactSect from './components/sections/ContactSect'
import BreadCrumb from './components/sections/BreadCrumb'

const ProductDetail = () => {
  return (
    <>
      <BreadCrumb />
      <ProductDetailSect />
      <ProductSlider />
      <ContactSect />
    </>
  )
}

export default ProductDetail
