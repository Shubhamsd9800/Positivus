import React, { useState } from 'react';
import line from "../iamges/Line.png"
const WorkingProcess = () => {
  const [isOpen1, setIsOpen1] = useState(true); 
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <section className="p-6 px-8 md:px-20 m-6 md:m-14 md:max-w-screen-2xl">
      {/* Heading */}
      <div className="flex flex-col md:flex-row space-x-10 md:pb-6 items-center md:items-center mb-8">
        <h2 className=" md:text-4xl font-bold bg-greenBg inline-block px-4 py-2 rounded-lg text-black">
          Our Working Process
        </h2>
        <p className="mt-4 md:text-left text-center pr-6 md:mt-0 text-gray-600 max-w-[90%] md:max-w-[22%]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Collapsible Item 1 */}
      <div
        className={`md:rounded-3xl p-6 mb-4 shadow-xl border-b-4 border-b-black border-2 border-black transition-all duration-300 ${
          isOpen1 ? `bg-greenBg rounded-3xl ` : `bg-gray-100 rounded-full`
        }`}
      >
        <img src={line} alt="" />
        {isOpen1 && (
          <p className="mt-6 text-gray-700">
            During the initial consultation, we will discuss your business goals and objectives, target audience,
            and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </p>
        )}
        <div className="flex md:mt-3 justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className=" text-xl md:text-[3rem] font-bold">01</span>
            <h3 className="text-xl md:text-[2rem] font-bold">Consultation</h3>
          </div>
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            className="text-2xl font-bold bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
          >
            {isOpen1 ? '-' : '+'}
          </button>
        </div>
      </div>

      {/* Collapsible Item 2 */}
      <div
        className={` md:rounded-3xl p-6 mb-4 shadow-xl border-b-4 border-b-black border-2 border-black transition-all duration-300 ${
          isOpen2 ? ` bg-greenBg rounded-3xl`  : `bg-gray-100 rounded-full`
        }`}
      >
        <img src={line} alt="" />
        
        {isOpen2 && (
          <p className="mt-6 text-gray-700">
            In this phase, we conduct thorough research on your industry, competitors, and target audience to develop a customized strategy that aligns with your business goals.
          </p>
        )}
        <div className="flex justify-between items-center">
          <div className="flex md:mt-4 items-center space-x-4">
            <span className="text-xl md:text-[3rem] font-bold">02</span>
            <h3 className="text-[15px] md:text-[2rem] font-bold">Research and Strategy Development</h3>
          </div>
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className="text-2xl font-bold bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
          >
            {isOpen2 ? '-' : '+'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
