import React from 'react';
import Section_title from '../Section_title';
import MarketBtn from '../MarketBtn';

const Sitemap = () => {
  return (
    <>
      <section className='sect-space p-t30'>
        <div className='container'>
            <div className='text-center'><Section_title  smTitle='Marketplace' mainTitle="Cursus quis condimentum nunc ultricies " /></div>
            <div className='row m-t30'>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
            </div>
            <div className='row m-t30'>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Sitemap
