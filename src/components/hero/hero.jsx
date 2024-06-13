import React from "react";

const Hero = () => {
  return (
    <div className="hero mt-[120px] min-h-[50vh] flex justify-start items-center bg-gradient-to-r from-green-200 to-green-500 dark:from-green-400 dark:to-green-700">
      <div className="hero-content text-start text-neutral-content md:ml-32">
        <div className="max-w-[40rem] ">
          <h1 className="mb-5 text-4xl md:text-5xl text-pretty font-bold text-stone-700 dark:text-stone-800">
            Lo mejor de la tecnología en un solo lugar
          </h1>
          <p className="mb-5 w-3/4 text-sm md:text-base text-stone-600 dark:text-stone-700 text-justify">
            Innovación y calidad en cada compra. En nuestra tienda online,
            encontrarás una amplia gama de productos tecnológicos diseñados para
            mejorar tu vida. Disfruta de un proceso de compra fácil, envíos
            rápidos y un soporte al cliente que siempre está a tu disposición.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
