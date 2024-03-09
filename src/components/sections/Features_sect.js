import React from 'react';
import Section_title from '../Section_title';
import Feature_card from '../Feature_card';

const Features_sect = () => {
  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'><Section_title smTitle="Features" mainTitle="Semper tellus sem magnis lacinia, elit montes quis" /></div>
            <div className='col-lg-6'><p className='m-t20'>Cursus quis condimentum nunc ultricies dis nisi diam nec. Bibendum potenti taciti ex parturient lacinia velit habitant. Volutpat nunc inceptos ultricies nisl accumsan mus quisque hac nunc. Primis curabitur iaculis class per egestas imperdiet. </p></div>
        </div>
        <div className='row m-t30'>
            <Feature_card addClass="active" featNumb="01" featTitle="Mechanical Engineering" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

            <Feature_card featNumb="02" featTitle="Mechanical Engineering" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

            <Feature_card featNumb="03" featTitle="Mechanical Engineering" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />

            <Feature_card featNumb="04" featTitle="Mechanical Engineering" featDesc="Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis ommm aecenas accumsa lacus vel ." />
        </div>
      </div>
    </section>
  )
}

export default Features_sect
