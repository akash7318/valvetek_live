import React, { useState, useEffect } from 'react';
import Section_title from '../Section_title';
import MarketBtn from '../MarketBtn';

const SitemapSect = () => {

  const [sitemaps, setSitemaps] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  const getPages = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}sitemaps`)
    result = await result.json();
    if (result.status) {
      setSitemaps(result.sitemaps);
    }
  }

  return (
    <>
      <section className='sect-space p-t30'>
        <div className='container'>
          <div className='text-center'>
            <Section_title smTitle='Sitemap' />
          </div>
          <div className='row m-t30'>
            {
              sitemaps
                ?
                sitemaps.map((value, index) =>
                  <div key={index} className='col-lg-3 col-md-4 col-sm-6 m-b20'>
                    <MarketBtn Href={'/' + value.slug} locationName={value.name} />
                  </div>
                )
                :
                null
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default SitemapSect
