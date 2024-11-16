import React from 'react';
import seoIcon from '../iamges/Card.png';
import ppcIcon from '../iamges/Card2.png';

const ServicesSection = () => {
  return (
    <section className="p-6 px-10 md:px-28">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 mb-8 md:mt-10">
        <h2 className="text-4xl font-bold mx-5 text-center bg-greenBg inline-block px-4 py-2 rounded-lg text-black">Services</h2>
        <p className="text-gray-600 max-w-[90%] md:max-w-[40%] mx-auto md:ml-4">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between w-full md:w-[48%]">
          <img src={seoIcon} alt="SEO" className="w-full h-auto mb-4" />
          <a href="#" className="text-black font-semibold flex items-center space-x-2 hover:text-lime-500">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 flex flex-col justify-between w-full md:w-[48%]">
          <img src={ppcIcon} alt="PPC" className="w-full h-auto mb-4" />
          <a href="#" className="text-black font-semibold flex items-center space-x-2 hover:text-lime-500">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
