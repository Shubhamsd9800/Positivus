import React from 'react';
import { useState } from 'react';
import logo from '../iamges/Icon.png'
import icon1 from '../iamges/Illustration.png'
import InfiniteScrollLogos from './infinite.jsx'
import Service from './Service.jsx'
import Working from './Working.jsx'
import Testo from './Testo.jsx';
import Footer from './Footer.jsx';


const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen w-full bg-whiteBg">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 px-10 py-10 lg:mx-20">
        <div className="font-bold text-4xl flex items-center">
          <img src={logo} alt="" className="h-8 mr-2" />
          Positivus
        </div>

         {/* Menu for Laptop */}
         <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-16 text-gray-700">
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              About us
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Services
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Use Cases
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Blog
            </a>
          </li>
        </ul>

        <button className="hidden md:block border border-gray-700 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Request a quote
        </button>

        {/* Mobile Menu (Visible when toggled) */}
        {isOpen && (
          <ul className={`md:hidden absolute top-[80px] left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-lg`}>
           <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              About us
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Services
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Use Cases
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className=" hover:border-b-2 hover:border-lime-400 pb-1">
              Blog
            </a>
          </li>
            <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
              Request a quote
            </button>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 px-10 md:mx-20">
        <div className=" md:w-1/2 space-y-6">
          <h1  className="text-4xl md:text-5xl font-bold md:leading-extraLoose text-gray-900 max-w-full md:max-w-[70%] text-left">
            Navigating the digital landscape for success
          </h1>

          {/* Illustration Section for Mobile */}
          <div className="w-full mt-6 flex justify-center md:hidden">
          <img src={icon1} alt="Digital Marketing" className="w-full max-w-[300px]" />
          </div>
          <p className="text-gray-600 text-lg mx-auto md:mx-0">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-lg hover:bg-gray-800 mx-auto md:mx-0">
            Book a consultation
          </button>
        </div>

        <div className="hidden md:flex md:w-3/5 mt-10 md:mt-0 justify-center">
          <img src={icon1} alt="Digital Marketing" className="w-full max-w-[520px] " />
        </div>
      </section>

      <InfiniteScrollLogos/>
      <Service/>
      <Working/>
      <Testo/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
