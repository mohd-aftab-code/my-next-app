// components/AirConditionerSection.js

export default function Looking() {
  return (
      <div className="py-14 bg-gray-200 w-full">
          <div className="w-11/12 flex flex-col md:flex-row justify-between flex-wrap rounded-lg bg-white mx-auto p-0">
              {/* Left Section */}
              <div className="p-8 md:p-20 w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl leading-8 text-black font-['AxiHeavy', 'Arial', 'sans-serif'] uppercase">
                      LOOKING TO BUY A NEW AIR CONDITIONER FOR YOUR HOME?
                  </h2>
                  <p className="text-lg md:text-xl py-4 leading-6 font-['AxiRegular', 'Arial', 'sans-serif']">
                      We are family owned and operated and have been a helping hand to the community since 2013. We specialize in installing highly efficient AC systems and servicing all existing Air Conditioning systems on residential properties.
                  </p>
                  <div className="mt-4">
                      <a
                          href="/contact" // Update the link to match your routing
                          title="Free Estimate"
                          className="py-4 px-6 text-base bg-green-600 text-white font-['AxiSemiBold', 'Arial', 'sans-serif'] inline-block rounded-full uppercase"
                      >
                          free estimate
                      </a>
                  </div>
              </div>

              {/* Right Section */}
              <div className="bg-cover bg-center rounded-lg w-full md:w-1/2 h-[300px] md:h-auto" style={{ backgroundImage: "url('https://www.myfreedomair.net/images/index/daikin-family-1.webp')" }}>
                  {/* You can also add additional content or overlay if needed */}
              </div>
          </div>
      </div>
  );
}
