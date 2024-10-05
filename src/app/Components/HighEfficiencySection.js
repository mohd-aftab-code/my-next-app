// components/HighEfficiencySection.js

import Image from 'next/image';
import highEfficiencyImage from '../Components/images/high-efficiency-air-conditioners.webp'; // Adjust the path according to your project structure
import redCheckImage from '../Components/images/red-check.png'; // Adjust the path according to your project structure

const HighEfficiencySection = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-start bg-[#D8F3FC] p-0">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
                <Image
                    loading="lazy"
                    src={highEfficiencyImage}
                    alt="High Efficiency Air Conditioners"
                    title="High Efficiency Air Conditioners"
                    className="w-full h-[450px] object-cover" // Set the height here
                />
            </div>
            {/* Right Section */}
            <div className="flex flex-col justify-center items-start p-4 md:p-8 md:px-20">
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-black leading-[38.4px] tracking-wide">
                    Ask about the <br /> $2000 tax credit <span className="block">on Daikin HVAC system</span>
                </h3>
                <ul className="list-disc pl-7 pt-6">
                    {[
                        'High-Efficiency Compressor',
                        'High-Efficiency Motor',
                        'Efficient Cooling Capacity',
                        'Quiet Operation',
                        'Advanced Diagnostics',
                    ].map((item) => (
                        <li
                            key={item}
                            className="text-lg flex items-center space-x-2 text-black leading-8"
                        >
                            <Image
                                src={redCheckImage}
                                alt="Checkmark"
                                width={17}
                                height={17}
                                className="inline-block"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <a
                        href="/contact"
                        title="Free Estimate"
                        className="bg-[#34A853] text-white font-semibold py-2 px-8 rounded-full text-lg uppercase"
                    >
                        Free Estimate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HighEfficiencySection;
