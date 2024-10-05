// components/AirConditioningFinancing.js

import Image from 'next/image';
import icon1 from '../Components/images/icons/icon-no-down-payment.png';
import icon2 from '../Components/images/icons/icon-repair-or-replace.png';
import icon3 from '../Components/images/icons/icon-brand-new-central.png';
import icon4 from '../Components/images/icons/icon-tune-up-per-year.png';
import logoFplHome from '../Components/images/icons/logo-fpl-home.webp';
import logoStressFree from '../Components/images/icons/logo-stress-free.webp';
import whiteVerticalLine from '../Components/images/icons/pic-white-vertical-line.png';

export default function AirConditioningFinancing() {
    return (
        <div className="py-10 md:py-[75px] w-full">
            <div className="w-[90%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase leading-snug md:leading-[38.4px]">
                    Finance your new A/C system{" "}
                    <span className="block">with FPL home</span>
                </h2>
                <div className="w-full mt-10 md:mt-[40px] flex flex-col md:flex-row justify-evenly flex-wrap mx-auto">
                    {/* Icon Cards */}
                    {[{
                        icon: icon1,
                        title: "No down payment for new A/C system!",
                        description: "One convenient monthly payment",
                    }, {
                        icon: icon2,
                        title: "We’ll repair or replace at no cost to you",
                        description: "It's covered if it fails due to normal wear and tear",
                    }, {
                        icon: icon3,
                        title: "Brand-new central A/C unit plus smart thermostat",
                        description: "Helps keep you comfortable while reducing energy use and bills",
                    }, {
                        icon: icon4,
                        title: "Tune-up per year included in your monthly fee",
                        description: "We take care of maintenance, at no charge",
                    }].map((card, index) => (
                        <div key={index} className="w-full md:w-[45%] mb-[30px] md:mb-[55px] p-4">
                            <div className="flex items-start">
                                <Image src={card.icon} alt={card.title} title={card.title} width={85} height={87} />
                                <p className="text-xl md:text-2xl font-bold ml-3 leading-tight md:leading-[25.2px]">
                                    {card.title}
                                </p>
                            </div>
                            <div className="border-2 border-[#01A9EA] h-[4px] w-full my-[15px] mb-[25px]" />
                            <p className="text-base md:text-lg leading-snug min-h-[82px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional AC Plan Details Section */}
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between p-4 md:p-[20px] bg-[#01A9EA] rounded-[10px]">
                    {/* Left Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
                        <Image
                            loading="lazy"
                            src={logoFplHome}
                            alt="FPL Home"
                            title="FPL Home"
                            className="mr-3 mb-2 md:mb-0"
                        />
                        <div className="text-center md:text-left">
                            <h2 className="text-lg md:text-[21px] mb-[5px] uppercase text-white">
                                THE COOLEST WAY
                                <br />
                                TO GET YOUR NEW A/C
                            </h2>
                            <p className="text-sm md:text-[14px] font-medium uppercase text-white leading-[18.2px]">
                                LICENSE NO. CAC 1817674
                            </p>
                        </div>
                    </div>

                    <Image
                        loading="lazy"
                        src={whiteVerticalLine}
                        alt="White Vertical Line"
                        title="White Vertical Line"
                        className="h-[70px] md:h-[170px] mx-2"
                    />

                    {/* Middle Section */}
                    <div className="flex justify-center items-center mb-4 md:mb-0">
                        <div className="text-center">
                            <h2 className="text-lg md:text-[21px] mb-[5px] uppercase text-white">
                                Learn more
                                <br />
                                about our monthly
                                <br />
                                plan options
                            </h2>
                            <div className="mt-[10px]">
                                <a
                                    href="https://www.youtube.com/embed/DwOBpq01_M4"
                                    rel="media-gallery"
                                    className="text-sm md:text-[16px] border-2 border-white py-[10px] px-[20px] text-white bg-[#EDB101] rounded-full uppercase"
                                >
                                    watch video
                                </a>
                            </div>
                        </div>
                    </div>

                    <Image
                        loading="lazy"
                        src={whiteVerticalLine}
                        alt="White Vertical Line"
                        title="White Vertical Line"
                        className="h-[70px] md:h-[170px] mx-2"
                    />

                    {/* Right Section */}
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
                        <Image
                            loading="lazy"
                            src={logoStressFree}
                            alt="Stress Free"
                            title="Stress Free"
                            className="h-[70px] md:h-[90px] mr-[5px] mb-2 md:mb-0"
                        />
                        <div>
                            <h2 className="text-lg md:text-[26px] font-bold text-white uppercase">
                                Stress-free
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
