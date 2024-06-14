import React from "react";
import Hero from "../../layout/hero/hero";
import InfiniteSlider from "../../layout/slider/InfiniteSlider";
import Carousel from "../../layout/carousel/carousel";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      
      <Hero />
        <InfiniteSlider />
      <div className="container flex justify-center gap-4 md:gap-10 mt-16">
        <a
          href="#"
          className="flex flex-col items-center justify-center w-28 h-24 md:w-[20rem] md:h-[7rem] rounded-2xl border dark:bg-stone-500 border-stone-900 dark:border-stone-100 hover:shadow-xl"
        >
          <span className="text-md md:text-2xl font-bold text-stone-700 dark:text-stone-100">Contáctanos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 md:size-12 text-stone-700 dark:text-stone-100"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center w-28 h-24 md:w-[20rem]  md:h-[7rem] rounded-2xl border dark:bg-stone-500 border-stone-900 dark:border-stone-100 hover:shadow-xl"
        >
          <span className="text-md md:text-2xl font-bold text-stone-700 dark:text-stone-100">
            Soporte Técnico
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 md:size-12 text-stone-700 dark:text-stone-100"
          >
            <path
              fillRule="evenodd"
              d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center w-28 h-24 md:w-[20rem]  md:h-[7rem] rounded-2xl border dark:bg-stone-500 border-stone-900 dark:border-stone-100 hover:shadow-xl"
        >
          <span className="text-md md:text-2xl font-bold text-stone-700 dark:text-stone-100">FAQ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 md:size-12 text-stone-700 dark:text-stone-100"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <Carousel title="PRODUCTOS DESTACADOS" />
      <div className="container px-4 sm:px-14 mt-24">
        <h2 className="text-center pl-0 py-2 md:pl-4 md:py-4 rounded-t-2xl text-stone-700 text-3xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-400 dark:from-green-700 dark:via-green-400 dark:to-green-700">
          CATEGORÍAS DESTACADAS
        </h2>
        <div className="container bg-white dark:bg-stone-400 grid grid-rows-1 grid-cols-1 place-items-center md:grid-rows-2 md:grid-cols-2 gap-4 mb-16">
          <div
            className="h-60 w-full md:justify-self-start bg-black bg-cover dark:border-b-zinc-200 dark:border-b-4" 
            style={{
              backgroundImage: `url(${require("../../../images/Phones.jpg")})`,
            }}
          >
            <a
              href="#"
              className="grid place-items-center w-full h-full bg-black opacity-50 transition duration-300 hover:bg-stone-900"
            >
              <span className="text-4xl font-bold text-stone-400">
                Celulares
              </span>
            </a>
          </div>
          <div
            className="h-60 w-full md:justify-self-start bg-black bg-cover lg:bg-center dark:border-b-zinc-200 dark:border-b-4"
            style={{
              backgroundImage: `url(${require("../../../images/Notebook.jpg")})`,
            }}
          >
            <a
              href="#"
              className="grid place-items-center w-full h-full bg-black opacity-50 transition duration-300 hover:bg-stone-900 "
            >
              <span className="text-4xl font-bold text-stone-400">
                Notebooks
              </span>
            </a>
          </div>
          <div
            className="h-60 w-full md:justify-self-start bg-black bg-cover dark:border-b-zinc-200 dark:border-b-4"
            style={{
              backgroundImage: `url(${require("../../../images/GPU.webp")})`,
            }}
          >
            <a
              href="#"
              className="grid place-items-center w-full h-full bg-black opacity-50 transition duration-300 hover:bg-stone-900 "
            >
              <span className="text-4xl font-bold text-stone-400">GPUs</span>
            </a>
          </div>
          <div
            className="h-60 w-full md:justify-self-start bg-black bg-cover dark:border-b-zinc-200 dark:border-b-4"
            style={{
              backgroundImage: `url(${require("../../../images/Gamer.jpg")})`,
            }}
          >
            <a
              href="#"
              className="grid place-items-center w-full h-full bg-black opacity-50 rounded-lg transition duration-300 hover:bg-stone-900 "
            >
              <span className="text-4xl font-bold text-stone-400">Sillas</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
