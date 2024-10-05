// components/DaikinFit.js

import Image from 'next/image';
import dlkin from '../Components/images/daikin-fit.webp';

const DaikinFit = () => {
  return (
    <div className="py-10 md:py-20 w-full box-border">
      <h2 className="sr-only">Freedom Air Conditioning</h2>
      <div className="w-11/12 mx-auto">
        <div className="max-w-2xl mx-auto relative">
          <h3 className="text-3xl text-center font-extrabold text-black uppercase tracking-wider">
            The Daikin Fit
          </h3>
        </div>
        <div className="bg-gray-200 p-8 md:p-16 flex flex-col md:flex-row items-center mt-10 rounded-lg">
          <div className="w-full md:w-1/3 mb-5 md:mb-0">
            <Image
              loading="lazy"
              src={dlkin}
              alt="Daikin Fit"
              title="Daikin Fit"
              width={700} // Set width based on your needs
              height={500} // Set height based on your needs
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-20">
            <h3 className="text-2xl font-extrabold text-black uppercase tracking-wider mb-5">
              Discover the Most Intelligent A/C System on the Planet – Daikin Fit by Freedom Air Conditioning
            </h3>
            <p className="text-lg leading-relaxed mb-5">
              At Freedom Air Conditioning, a trusted family-owned business since 2013, we pride ourselves on offering the most advanced air conditioning solutions for your home. Our premier product? The Daikin Fit System, an intelligent and energy-efficient HVAC system that redefines comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaikinFit;
