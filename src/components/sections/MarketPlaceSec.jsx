import React from 'react'
import Section_title from '../Section_title';
import MarketBtn from '../MarketBtn';

function MarketPlaceSec(props) {
    const locations = props.data.locations;
    const promotionalCategories = props.data.promotionalCategories;

    return (
        <section className='sect-space p-t30'>
            <div className='container'>
                <div className='text-center'>
                    <Section_title smTitle='Market Place' />
                </div>
                <div className='row m-t30'>
                    {
                        promotionalCategories
                            ?
                            promotionalCategories.map((value, index) =>
                                <div key={index} className='col-lg-3 col-md-4 col-sm-6 m-b20'>
                                    <MarketBtn Href={'/' + value.slug} locationName={value.name} />
                                </div>
                            )
                            :
                            null
                    }
                </div>
                <div className='row m-t30'>
                    {
                        locations
                            ?
                            locations.map((value, index) =>
                                <>
                                    <div key={index} className='col-12'>
                                        <MarketBtn Href={'/' + value.parantSlug} locationName={value.parantName} />
                                    </div>
                                    {
                                        value.cities.map((value, index) =>
                                            <div key={index} className='col-lg-3 col-md-4 col-sm-6 m-b20'>
                                                <MarketBtn Href={'/' + value.slug} locationName={value.name} />
                                            </div>
                                        )
                                    }
                                </>
                            )
                            :
                            null
                    }
                </div>
            </div>
        </section>
    )
}

export default MarketPlaceSec