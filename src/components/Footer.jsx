import React from 'react';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';
import whiteIcon from '../iamges/whiteIcon.png'; // Replace with your actual image path

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-16">
      <footer className="bg-gray-900 text-white w-full md:max-w-screen-xl p-6 px-10 md:px-20 md:rounded-t-3xl">
        <div className="max-w-[1200px] mx-auto">
          {/* Top Section: Logo, Navigation Links, and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
            {/* Logo and Navigation Links */}
            {/* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left"> */}
              <div className="flex items-center justify-center space-x-2">
                <img src={whiteIcon} alt="Positivus Logo" className="h-[30px]" />
                <h2 className="text-xl font-bold">Positivus</h2>
              </div>
              <nav className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <a href="#" className="hover:text-lime-400">About us</a>
                <a href="#" className="hover:text-lime-400">Services</a>
                <a href="#" className="hover:text-lime-400">Use Cases</a>
                <a href="#" className="hover:text-lime-400">Pricing</a>
                <a href="#" className="hover:text-lime-400">Blog</a>
              </nav>
            {/* </div> */}

            {/* Social Icons */}
            <div className="flex space-x-[12px] justify-center md:justify-end">
              <FaLinkedin size={24} />
              <FaFacebookF size={24} />
              <FaTwitter size={24} />
            </div>
          </div>

          {/* Bottom Section: Contact Info and Subscription Form */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
            {/* Contact Info */}
            <div className="space-y-4 mb-8 md:mb-0">
              <h3 className="font-bold bg-greenBg inline-block px-3 py-1 rounded-md text-black">Contact us:</h3>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>

            {/* Subscription Form */}
            <div className="bg-gray-800 p-4 rounded-lg w-full md:w-auto flex flex-col md:flex-row px-6 space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-[12px] bg-gray-700 w-full md:w-auto rounded-md border border-gray-600 focus:outline-none focus:ring focus:border-lime-400 h-[48px]" 
            />
            <button 
              className="bg-greenBg text-black py-[12px] px-[24px] rounded-md hover:bg-lime-500 transition-all duration-[300ms] h-[48px]"
            >
              Subscribe to news
            </button>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-[16px] text-center text-sm text-gray-500 mt-[32px]">
            © {new Date().getFullYear()} Positivus. All Rights Reserved.
            &nbsp;<a href="#" className="hover:text-lime-400">Privacy Policy</a>.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
