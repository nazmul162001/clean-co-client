import React from 'react';
import girl from '../../assets/images/bucketgirl.png';

const Banner = () => {
  return (
    <div class="hero h-[60vh] bg-accent">
      <div class="hero-content flex-col lg:flex-row p-0">
        <div className='max-w-xl'>
          <h2 class="text-xl">Best Quality</h2>
          <h1 className='text-5xl font-bold text-gray-600'>Professional Cleaning Service</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <div className='h-[60vh]'>
          <img src={girl} class="h-full" alt="/banner-images" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
