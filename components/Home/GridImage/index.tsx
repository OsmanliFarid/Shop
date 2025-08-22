import Image from "next/image";
import Link from "next/link";
import React from "react";

const GridImage = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-2">
            <div className="">
              <div className="flex items-center overflow-hidden gap-x-15">
                <div className="relative ml-[-40px] mb-[-40px] w-[300px] h-[370px]">
                  <Image
                    src={"/images/Home/GridImage/GridImage.png"}
                    alt="GridImage"
                    fill
                    sizes="(max-width:768px),100vw,500px"
                    className="object-cover"
                  />
                </div>
                <div className="max-w-[400px]">
                  <h1 className="text-5xl font-bold mb-5">Playstation 5</h1>
                  <p className="text-[#909090]">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                {/* cart1 */}
                <div className="overflow-hidden flex gap-x-10 items-center bg-[#EDEDED]">
                  <div className="relative ml-[-140px] w-[270px] h-[300px]">
                    <Image
                      src={"/images/Home/GridImage/GridImage2.png"}
                      alt="GridImage"
                      fill
                      sizes="(max-width:768px),100vw,500px"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-black text-3xl gap-y-2 flex flex-col font-medium max-w-[40px]">
                      <span className="font-light">Apple</span>
                      <span className="font-light">AirPods</span>
                      <span>Max</span>
                    </h1>
                    <p className="text-[#909090] max-w-[180px] mt-4">
                      Computational audio. Listen, it's powerful
                    </p>
                  </div>
                </div>
                {/* cart2 */}
                <div className="overflow-hidden flex gap-x-10 items-center bg-[#353535]">
                  <div className="relative ml-[-30px]  w-[200px] h-[200px]">
                    <Image
                      src={"/images/Home/GridImage/GridImage3.png"}
                      alt="GridImage"
                      fill
                      sizes="(max-width:768px),100vw,500px"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-white text-3xl gap-y-2 flex flex-col font-medium max-w-[20px]">
                      <span className="font-light">Apple</span>
                      <span className="flex gap-x-1">
                        <span className="font-light">Vision </span>
                        <span>Pro</span>
                      </span>
                    </h1>
                    <p className="text-[#909090] max-w-[180px] mt-4">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#EDEDED]">
              <div className="mx-15">
                <h1 className="text-black text-7xl font-light max-w-10">
                  Macbook <span className="font-bold">Air</span>
                </h1>
                <p className="text-[#909090] mb-5 max-w-[390px] py-5">
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <Link
                  href={"/"}
                  className="text-black border-1  border-[#000000] p-[15px_50px] rounded-lg font-semibold"
                >
                  Shop Now
                </Link>
              </div>
              <div className="relative  w-[200px] h-[80vh]">
                <Image
                  src={"/images/Home/GridImage/GridImage4.png"}
                  alt="GridImage"
                  fill
                  sizes="(max-width:768px),100vw,500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridImage;
