// pages/Products.js

import React from 'react';
import Image from 'next/image';
import termos from '../Components/images/termostats.webp';
import dikfit from '../Components/images/daikin-fit.webp';
import air from '../Components/images/air-purifier.jpg';

const Products = () => {
    return (
        <div className="pb-10 md:pb-20 w-full box-border">
            <div className="w-11/12 mx-auto box-border p-0">
                <div className="flex flex-col md:flex-row gap-4 box-border m-0 p-0"> {/* Stack items vertically on mobile */}
                    {/* Product 1 */}
                    <div className="w-full md:w-1/3 p-4 border border-black rounded-lg flex flex-col">
                        <div className="min-h-[210px]">
                            <Image
                                loading="lazy"
                                src={termos}
                                alt="termostats"
                                className="w-full mx-auto block"
                                layout="responsive"
                                width={600} // Adjust width according to your image dimensions
                                height={400} // Adjust height according to your image dimensions
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-left pt-4 md:pt-8 text-[#1F1049] tracking-wide uppercase">
                            Daikin ONE+ Smart <span>Thermostat</span>
                        </h3>
                        <p className="text-base md:text-lg font-normal pb-4 md:pb-8 leading-6">
                            The Daikin ONE+ smart thermostat is the cloud-connected hub of a sophisticated, integrated solution for controlling temperatures and monitoring air quality.
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://www.youtube.com/watch?v=cvUFOTTlkdE"
                                rel="media-gallery"
                                className="px-6 py-3 text-lg flex justify-center items-center bg-[#01A9EA] text-white uppercase cursor-pointer leading-4 text-center font-normal rounded-full max-w-[300px] mx-auto no-underline"
                            >
                                watch video
                            </a>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="w-full md:w-1/3 p-4 border border-black rounded-lg flex flex-col">
                        <div className="min-h-[210px]">
                            <Image
                                loading="lazy"
                                src={dikfit}
                                alt="Daikin Fit"
                                className="w-[180px] mx-auto block"
                                layout="intrinsic"
                                width={180} // Adjust width according to your image dimensions
                                height={120} // Adjust height according to your image dimensions
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-left pt-4 md:pt-8 text-[#1F1049] tracking-wide uppercase">
                            Daikin Fit Inverter <span>Technology</span>
                        </h3>
                        <p className="text-base md:text-lg font-normal pb-4 md:pb-8 leading-6">
                            Running at low energy conserving levels, the air is consistently filtered, the Daikin Fit will help drastically improve your comfort level by also controlling humidity.
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://www.youtube.com/watch?v=18EF1pDH9pc"
                                rel="media-gallery"
                                className="px-6 py-3 text-lg flex justify-center items-center bg-[#01A9EA] text-white uppercase cursor-pointer leading-4 text-center font-normal rounded-full max-w-[300px] mx-auto no-underline"
                            >
                                watch video
                            </a>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="w-full md:w-1/3 p-4 border border-black rounded-lg flex flex-col">
                        <div className="min-h-[210px]">
                            <Image
                                loading="lazy"
                                src={air}
                                alt="Air Purifier"
                                className="w-[180px] mx-auto block"
                                layout="intrinsic"
                                width={180} // Adjust width according to your image dimensions
                                height={120} // Adjust height according to your image dimensions
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-left pt-4 md:pt-8 text-[#1F1049] tracking-wide uppercase">
                            Quiet Operation <span>(inside and out)</span>
                        </h3>
                        <p className="text-base md:text-lg font-normal pb-4 md:pb-8 leading-6">
                            With the ability to operate more consistently, at variable speeds, the Daikin Fit system can help bring additional acoustical comfort to any environment.
                        </p>
                        <div className="mt-auto">
                            <a
                                href="https://www.youtube.com/watch?v=UszEJexe2rg"
                                rel="media-gallery"
                                className="px-6 py-3 text-lg flex justify-center items-center bg-[#01A9EA] text-white uppercase cursor-pointer leading-4 text-center font-normal rounded-full max-w-[300px] mx-auto no-underline"
                            >
                                watch video
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
