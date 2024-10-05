"use client"; // Make sure this is a Client Component

import Image from 'next/image';
import { useState } from 'react';

// Import all logo images
import one from '../Components/images/pic-down-logo-1.webp';
import two from '../Components/images/pic-down-logo-2.webp';
import three from '../Components/images/pic-down-logo-3.webp';
import four from '../Components/images/pic-down-logo-4.webp';
import five from '../Components/images/pic-down-logo-5.webp';

// Array of logo objects 
const logos = [
  { src: one, alt: 'Home Advisor 1' },
  { src: two, alt: 'Home Advisor 2' },
  { src: three, alt: 'Home Advisor 3' },
  { src: four, alt: 'Home Advisor 4' },
  { src: five, alt: 'Home Advisor 5' },
];

const LogoSection = () => {
  return (
    <div className="w-full overflow-hidden py-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat logos to create an infinite effect */}
        {logos.map((logo, index) => (
          <a
            key={index}
            target="_blank"
            href="http://www.homeadvisor.com/rated.FreedomAirConditioning.40583814.html"
            rel="noopener noreferrer"
            className="mb-5 transition-transform transform hover:scale-105 w-[160px] flex-shrink-0"
          >
            <LogoImage src={logo.src} alt={logo.alt} /> 
          </a>
        ))}
        {logos.map((logo, index) => (
          <a
            key={index + logos.length} // Ensure unique keys
            target="_blank"
            href="http://www.homeadvisor.com/rated.FreedomAirConditioning.40583814.html"
            rel="noopener noreferrer"
            className="mb-5 transition-transform transform hover:scale-105 w-[160px] flex-shrink-0"
          >
            <LogoImage src={logo.src} alt={logo.alt} /> 
          </a>
        ))}
      </div>
    </div>
  );
};

// LogoImage Component for handling image loading and fallback
const LogoImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src); // State to hold image source

  const handleError = () => {
    const fallbackSrc = src.replace('.webp', '.jpg'); // Fallback to jpg
    setImgSrc(fallbackSrc); // Update state to fallback image
  };

  return (
    <Image
      src={imgSrc} // Use current image source
      alt={alt}
      height={105} // Set a fixed height
      width={160} // Set a fixed width
      className="h-[105px] w-[160px] object-contain" // Ensure consistent size and preserve aspect ratio
      loading="lazy" // Lazy loading
      onError={handleError} // Handle image errors
    />
  );
};

export default LogoSection;
