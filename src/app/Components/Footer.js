import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo1 from '../Components/images/logo1.webp';
import logo2 from '../Components/images/logo2.webp';
import logo3 from '../Components/images/logo3.png';
import freedon from '../Components/images/logo-footer.webp';

function Footer() {
  return (
    <footer className="bg-gray-200 w-full">
      <Head>
        <title>Freedom Air Conditioning</title>
      </Head>

      {/* Footer Content */}
      <div className="flex flex-col p-4 md:p-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          {/* Logo and Certifications */}
          <div className="text-left mb-4 md:mb-0">
            <h3 className="font-semibold text-lg md:text-xl mb-4">Certifications</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Image src={logo1} alt="EPA Logo" width={80} height={80} className="object-contain" />
              <Image src={logo3} alt="NATE Logo" width={80} height={80} className="object-contain" />
              <Image src={logo2} alt="Florida Seal" width={80} height={80} className="object-contain" />
            </div>
          </div>

          {/* Horizontal Divider Line */}
          <div className="hidden md:block border-l-2 border-white h-auto mx-4"></div>

          {/* Navigation Links */}
          <div className="text-left mb-4 md:mb-0">
            <h3 className="font-semibold text-lg md:text-xl mb-4">Quick Links</h3>
            <ul>
              {[
                { href: './', text: 'Home' },
                { href: 'ac-repair.php', text: 'AC Repair' },
                { href: 'hvac-maintenance.php', text: 'HVAC Maintenance' },
                { href: 'air.php', text: 'Air Quality' },
                { href: 'daikin-ac-systems.php', text: 'Daikin AC Systems' },
                { href: 'faq.php', text: 'FAQ' }
              ].map((link, index) => (
                <li key={index} className="py-2">
                  <a href={link.href} className="text-blue-500 hover:text-blue-800">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horizontal Divider Line */}
          <div className="hidden md:block border-l-2 border-white h-auto mx-4"></div>

          {/* Company Info */}
          <div className="text-left">
            <h3 className="font-semibold text-lg md:text-xl mb-4">Contact Us</h3>
            <Image src={freedon} alt="Freedom Air Conditioning Logo" width={120} height={120} className="mb-4" />
            <p className="text-lg text-justify">Freedom Air Conditioning</p>
            <p className="text-lg text-justify">(863) 229-7058</p>
            <p className="text-lg text-justify">207 Gandy Rd, Suite B</p>
            <p className="text-lg text-justify">Auburndale, FL 33823</p>
          </div>
        </div>

        {/* Horizontal White Line Divider */}
        <div className="border-b-2 border-white my-4"></div> {/* Line below content */}

      </div>

      {/* Social Media and Licensing */}
      <div className="bg-[#01A9EA] p-4 lg:text-center text-center md:text-left">
        <p className="text-sm md:text-lg">
          State of Florida Air Conditioning License Number: CAC1817674, CAC1821585
        </p>
        <p className="text-sm md:text-lg">
          ©2024 Freedom Air Conditioning. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
