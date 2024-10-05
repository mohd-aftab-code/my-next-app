import Image from 'next/image';
import air from '../Components/images/icons/icon-air-Conditioner.png';
import like from '../Components/images/icons/icon-like-hand.png';
import priz from '../Components/images/icons/icon-prize.png';
import guarantee from '../Components/images/icons/icon-guarantee.png';

const Features = () => {
  return (
    <div className="py-9 bg-sky-500 w-full box-border m-0">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between flex-wrap">
          {/* Feature Item */}
          <div className="relative w-full md:w-1/4 text-center px-4 md:px-12 border-b md:border-b-0 md:border-r border-white last:border-none">
            <Image
              src={air}
              alt="Air Conditioner Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-lg mt-2 text-white capitalize font-sans">
              Daikin® Authorized <span className="block">Dealer.</span>
            </p>
          </div>
          <div className="relative w-full md:w-1/4 text-center px-4 md:px-12 border-b md:border-b-0 md:border-r border-white last:border-none">
            <Image
              src={priz}
              alt="Prize Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-lg mt-2 text-white capitalize font-sans">
              Superior quality air <span className="block">conditioning systems.</span>
            </p>
          </div>
          <div className="relative w-full md:w-1/4 text-center px-4 md:px-12 border-b md:border-b-0 md:border-r border-white last:border-none">
            <Image
              src={like}
              alt="Like Hand Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-lg mt-2 text-white capitalize font-sans">
              No Gimmicks. <span className="block">Just Results.</span>
            </p>
          </div>
          <div className="relative w-full md:w-1/4 text-center px-4 md:px-12 border-b md:border-b-0">
            <Image
              src={guarantee}
              alt="Guarantee Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-lg mt-2 text-white capitalize font-sans">
              Industry leading <span className="block">warranties.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
