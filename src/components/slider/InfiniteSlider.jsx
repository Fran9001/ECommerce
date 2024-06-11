import React from "react";

const InfiniteSlider = () => {
  return (
    <div className="w-full bg-zinc-200 space-x-16 overflow-hidden">
      <div className="w-full flex justify-center items-center gap-4 sm:gap-6 lg:gap-6 xl:gap-8 2xl:gap-14 h-fit bg-zinc-200 animate-loop-scroll">
        <img
          src={require("../../images/brands/Samsung.png")}
          alt="Samsung logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Apple.png")}
          alt="Apple logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Motorola.png")}
          alt="Motorola logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Nvidia.png")}
          alt="Nvidia logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Ryzen.png")}
          alt="Ryzen logo"
          className="w-20 lg:w-24 xl:w-28 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Intel.png")}
          alt="Intel logo"
          className="w-20 xl:w-28 2xl:w-28 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/HP.png")}
          alt="HP logo"
          className="w-12 sm:w-14 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/AMD.png")}
          alt="AMD logo"
          className="w-20 xl:w-28 2xl:w-28 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Logitech.png")}
          alt="Logitech logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Redragon.png")}
          alt="Redragon logo"
          className="w-12 sm:w-16 lg:w-24 xl:w-24 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Gigabyte.png")}
          alt="Gigabyte logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Kingston.png")}
          alt="Kingston logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
        <img
          src={require("../../images/brands/Western Digital.png")}
          alt="Western Digital logo"
          className="w-20 lg:w-24 xl:w-32 2xl:w-40 grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
};

export default InfiniteSlider;
