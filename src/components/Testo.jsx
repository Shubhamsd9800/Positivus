import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus has transformed our digital marketing strategy. Their team is knowledgeable, creative, and always available when we need them. We've seen tremendous growth in our online presence.",
    name: "Jane Doe",
    position: "CEO at ABC Inc.",
  },
  {
    quote:
      "The results speak for themselves! Positivus has helped us achieve our business goals faster than we expected. Their approach to digital marketing is innovative and effective.",
    name: "Michael Lee",
    position: "Founder at Startup Co.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="p-6 px-10 md:px-20 md:mx-14">
      {/* Heading */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-center mb-8">
        <h2 className="text-4xl font-bold bg-greenBg inline-block px-4 py-2 rounded-lg text-black">
          Testimonials
        </h2>
        <p className="mt-4 md:max-w-[35%] text-center md:text-start md:mt-0 text-gray-600 max-w-[90%] ">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="bg-gray-900  rounded-3xl p-6 md:px-[8rem] relative overflow-hidden">
        <div className="flex justify-between items-center">
          {/* Testimonial Content */}
          <div className="flex-shrink-0 w-full md:w-[70%] mx-auto text-white text-center">
            <p className="text-lg mb-4">{testimonials[currentSlide].quote}</p>
            <h4 className="text-lime-400 font-bold">{testimonials[currentSlide].name}</h4>
            <p>{testimonials[currentSlide].position}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className=" left-0 bottom-[-50px] flex items-center justify-between w-full px-6">
          <button onClick={prevSlide} className="text-white">&larr;</button>
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-[10px] h-[10px] rounded-full ${
                  i === currentSlide ? 'bg-greenBg' : 'bg-gray-500'
                }`}
              ></span>
            ))}
          </div>
          <button onClick={nextSlide} className="text-white">&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
