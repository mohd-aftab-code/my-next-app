"use client"; // Mark this component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import logo from '../Components/images/logo-footer.webp';
import review from '../Components/images/google-reviews-btn.png';

const Banner = () => {
  return (
    <div
            className="h-[670px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://www.myfreedomair.net/images/index/main-banner.webp')" }}
        >
      <div className="w-[90%] mx-auto flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row justify-between flex-wrap">
          {/* Left side content */}
          <div className="md:w-2/5 text-left mb-8 md:mb-0">
            <Link href="./" title="Home">
              <Image
                loading="lazy"
                src={logo}
                alt="Freedom Air Conditioning"
                title="Freedom Air Conditioning"
                className="max-w-[240px]"
                width={240}
                height={60}
              />
            </Link>
            <h1 className="text-[32px] md:text-[38px] py-[20px] pb-[20px] font-bold uppercase leading-[41.8px]">
              Unmatched Comfort <span className="font-semibold">with 12 Years of</span> <br /> Total Protection
            </h1>
            <div className="mt-[30px] flex flex-col md:flex-row items-center">
              <Link
                href="contact.php"
                title="Free Estimate"
                className="px-[35px] py-[20px] text-[16px] bg-green-600 text-white rounded-full uppercase mb-4 md:mb-0 md:mr-4"
              >
                free estimate
              </Link>
              <Link href="https://maps.app.goo.gl/zDNoYwrd2mejnMcU8" target="_blank">
                <Image
                  loading="lazy"
                  src={review}
                  alt="Google Reviews"
                  title="Google Reviews"
                  className="max-w-[200px]"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>

          {/* Right side content */}
          {/* <div className="md:w-3/5 flex justify-end md:items-center">
            <link rel="preload" fetchpriority="high" as="image" href="/images/index/myfreedomair-main-banner-daikin-mobile.webp" type="image/webp" />
            <Image
              src="/images/index/myfreedomair-main-banner-daikin-mobile.webp"
              alt="12 Years Warranty Daikin"
              title="12 Years Warranty Daikin"
              className="hidden md:block" // Show only on medium screens and up
              width={300}
              height={200}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
