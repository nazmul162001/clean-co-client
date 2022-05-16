import React from 'react';
import girl from '../../assets/images/bucketgirl.png';

const Banner = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[70vh] bg-accent pb-14">
        <div class="hero-content flex-col lg:flex-row p-0">
          <div className="max-w-xl px-5 md:px-0">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              class="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
              class="py-6"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1300"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={girl} class="h-full" alt="/banner-images" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto mt-[-60px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Banner;
