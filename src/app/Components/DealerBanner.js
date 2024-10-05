// components/DealerBanner.js

import Image from 'next/image';
import logo from '../Components/images/daikin-logo-div.png'// Update the path according to your project structure

const DealerBanner = () => {
    return (
        <div className="py-12 bg-[#01A9EA]">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center">
                    <Image
                        loading="lazy"
                        src={logo}
                        alt="Daikin Logo"
                        title="Daikin Logo"
                        className="w-[180px]"
                    />
                    <h3 className="text-3xl pt-8 pb-4 text-white uppercase font-bold tracking-wide text-center">
                        Daikin Authorized Dealer
                    </h3>
                    <p className="text-lg mb-6 text-white text-center leading-6">
                        Save BIG On Maximized Comfort, Efficiency & Quality
                    </p>
                    <div className='mt-5'>
                        <a
                            href="contact.php"
                            title="Free Estimate"
                            className="px-8 py-5 text-lg border-4 border-white bg-green-600 text-white font-semibold rounded-full uppercase leading-6 transition duration-300 hover:bg-green-700"
                        >
                            Free Estimate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealerBanner;
