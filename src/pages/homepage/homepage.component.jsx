import React from 'react';

import './hompage.styles.scss';

import Highlight from '../../components/highlight/highlight.component';

const Homepage = () => (
  <div className='homepage'>
    <div className='top-image'>SHOP NOW</div>
    <section className='highlights'>
      <Highlight
        url=''
        imgUrl='https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_2.0,f_auto,q_auto/v1/i/665f151a_cf0c.jpg'
        title='The Summer Jean Coverall'
        subtitle='Lightweight summer denim. Crazy comfortable shape. Just $98.'
      />
      <Highlight
        url=''
        imgUrl='https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_2.0,f_auto,q_auto/v1/i/942a2a68_1b78.png'
        title='Every Action Counts'
        subtitle='There are a lot of ways to show up for this historic moment. Our team has created a resource doc here.'
      />
      <Highlight
        url=''
        imgUrl='https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_2.0,f_auto,q_auto/v1/i/e0e9fe43_fa0b.jpg'
        title='The $38 Perform Bike Short'
        subtitle='Technical. Premium. Designed to do it all.'
      />
    </section>
  </div>
);

export default Homepage;
