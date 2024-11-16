import React, { useEffect, useRef } from "react";
import c1 from '../iamges/c1.png';
import c2 from '../iamges/c2.png';
import c3 from '../iamges/c3.png';
import c4 from '../iamges/c4.png';
import c5 from '../iamges/c5.png';

const InfiniteScrollLogos = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      // Duplicate the logo list for seamless scrolling
      const originalLogos = logosRef.current;
      const clone = originalLogos.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      originalLogos.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden 
                 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start 
                   [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src={c1} alt="Facebook" />
        </li>
        <li>
          <img src={c2} alt="Disney" />
        </li>
        <li>
          <img src={c3} alt="Airbnb" />
        </li>
        <li>
          <img src={c4} alt="Apple" />
        </li>
        <li>
          <img src={c5} alt="Spark" />
        </li>
      </ul>
    </div>
  );
};

export default InfiniteScrollLogos;
