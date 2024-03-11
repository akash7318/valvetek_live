import React from 'react';
import Section_title from '../Section_title';
import Feature_card from '../Feature_card';

const Features_sect = () => {
  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'><Section_title smTitle="Valvetek Engineering" mainTitle="Your Gateway to Precision Dampers and Expansion Joints" /></div>
          <div className='col-lg-6'><p className='m-t20'>Welcome to Valvetek Engineering, where precision meets performance in the world of dampers and expansion joints. Explore our key products.</p></div>
        </div>
        <div className='row m-t30'>
          <Feature_card addClass="active" featNumb="01" featTitle="Butterfly Damper" featDesc="Achieve optimal airflow control with our high-quality butterfly dampers, designed for efficiency and durability." />

          <Feature_card featNumb="02" featTitle="Guillotine Damper" featDesc="Experience seamless isolation and control of gas or airflow with our reliable and sturdy guillotine dampers." />

          <Feature_card featNumb="03" featTitle="Multi Louver Damper" featDesc="Customize your air or gas flow control with our versatile multi-louver dampers, offering precision and flexibility." />

          <Feature_card featNumb="04" featTitle="Louver Damper" featDesc="Ensure precise regulation of ventilation systems with our louver dampers, combining functionality with reliability." />
        </div>
      </div>
    </section>
  )
}

export default Features_sect
