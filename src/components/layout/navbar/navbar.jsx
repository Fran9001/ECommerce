import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex-col p-0 fixed top-0 z-[100]">
      {/* Top navbar */}
      <div className="navbar bg-zinc-300 dark:bg-stone-900 flex justify-between sm:justify-center">
        {/* Name/Logo */}
        <div>
          <a
            href="#"
            className="px-0 mr-2 sm:px-2 btn btn-ghost text-xl text-stone-800 hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 300.000000 226.000000"
              preserveAspectRatio="xMidYMid meet"
              className="h-12 text-stone-900 dark:text-zinc-200"
            >
              <g
                transform="translate(0.000000,226.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M230 2157 c-24 -12 -25 -16 -28 -130 l-3 -117 -69 0 c-77 0 -100 -13 -100 -59 0 -43 30 -62 105 -68 l65 -6 0 -808 c0 -796 0 -809 20 -829 23 -23 58 -26 85 -6 14 10 20 30 23 80 l4 66 49 0 49 0 0 -63 c0 -71 17 -97 62 -97 48 0 58 26 58 145 l0 108 45 48 45 48 0 83 0 83 117 -2 c65 -1 121 -2 126 -3 4 0 7 -42 7 -94 0 -108 -2 -106 96 -106 l64 0 0 100 0 100 80 0 80 0 0 -95 c0 -69 3 -95 13 -96 6 0 21 -2 32 -4 11 -2 37 -2 57 2 l37 5 3 96 3 96 30 0 30 0 3 -97 3 -97 504 0 504 0 3 96 3 96 207 -1 c221 -2 259 4 299 51 18 20 19 53 19 718 0 687 0 698 -20 723 -12 15 -38 31 -58 37 -59 16 -2620 13 -2652 -3z m318 -154 l-3 -38 -57 -3 -58 -3 -2 -332 -3 -332 -45 0 -45 0 -3 373 -2 372 110 0 111 0 -3 -37z m2292 -600 l0 -638 -1103 0 c-875 0 -1102 3 -1101 13 1 6 2 293 3 637 l1 625 1100 0 1100 0 0 -637z m-2410 -438 l0 -205 -50 0 -50 0 0 205 0 205 50 0 50 0 0 -205z m5 -361 c30 -33 32 -63 4 -98 -52 -66 -144 6 -105 83 25 48 65 54 101 15z m1855 -14 l0 -40 -410 0 -410 0 0 33 c0 19 3 37 7 40 3 4 188 7 410 7 l403 0 0 -40z" />
                <path d="M1780 2014 c-260 -30 -486 -180 -594 -397 -60 -119 -75 -210 -57 -335 21 -149 111 -304 233 -401 l63 -50 450 -1 451 0 70 72 c88 92 111 123 165 228 43 84 43 86 47 207 4 131 -4 175 -55 278 -63 127 -193 255 -330 324 -109 54 -316 90 -443 75z m625 -639 l0 -350 -22 -3 -23 -3 0 349 c0 192 3 352 7 356 4 4 14 5 23 4 13 -3 15 -45 15 -353z m-985 245 l0 -100 -30 0 -30 0 0 100 0 100 30 0 30 0 0 -100z m654 90 c48 -11 115 -58 138 -97 22 -36 37 -203 19 -203 -6 0 -11 7 -11 15 0 21 -45 92 -84 133 -70 76 -208 115 -323 93 -115 -22 -193 -83 -249 -193 -51 -101 -31 -250 48 -352 68 -89 162 -130 283 -124 159 9 271 96 330 257 13 34 14 30 14 -67 1 -92 -2 -108 -21 -135 -31 -43 -56 -65 -103 -87 -35 -17 -63 -20 -237 -20 -226 0 -253 7 -325 81 -64 67 -83 137 -83 302 0 86 5 150 14 181 31 101 112 190 197 214 43 13 341 14 393 2z m-106 -229 c131 -67 146 -228 29 -315 -41 -30 -163 -30 -204 0 -66 49 -96 137 -73 211 33 102 153 152 248 104z m-548 -301 l0 -150 -30 0 -30 0 0 150 0 150 30 0 30 0 0 -150z" />
                <path d="M2636 1939 c-54 -42 -19 -149 49 -149 37 0 73 27 80 61 18 82 -65 138 -129 88z" />
                <path d="M757 1883 c-4 -3 -7 -33 -7 -65 l0 -58 110 0 110 0 0 59 c0 44 -4 60 -16 65 -21 8 -189 8 -197 -1z" />
                <path d="M763 1603 c-9 -3 -13 -26 -13 -63 0 -59 0 -59 33 -64 26 -5 91 -3 175 3 19 2 16 117 -4 125 -19 7 -173 7 -191 -1z" />
                <path d="M763 1323 c-9 -3 -13 -26 -13 -63 0 -59 0 -59 33 -65 17 -3 66 -5 107 -3 l75 3 3 58 c3 54 1 58 -23 67 -27 10 -160 13 -182 3z" />
                <path d="M752 978 l3 -63 105 0 105 0 3 63 3 62 -111 0 -111 0 3 -62z" />
                <path d="M2619 981 c-38 -38 -37 -71 2 -110 34 -35 63 -39 99 -14 34 23 40 33 40 71 0 23 -8 40 -26 57 -37 34 -78 33 -115 -4z" />
                <path d="M710 295 c0 -20 5 -25 25 -25 26 0 25 2 30 -85 4 -77 3 -77 33 -73 27 3 27 4 30 81 3 74 4 77 27 77 20 0 25 5 25 25 0 25 -1 25 -85 25 -84 0 -85 0 -85 -25z" />
                <path d="M959 313 c-1 -4 -2 -52 -3 -105 l-1 -98 78 0 c70 0 77 2 77 20 0 17 -7 20 -50 20 -43 0 -50 3 -50 20 0 17 7 20 40 20 33 0 40 3 40 20 0 16 -7 20 -35 20 -28 0 -35 4 -35 19 0 16 8 20 43 23 34 2 42 7 42 23 0 18 -8 20 -72 23 -40 2 -74 -1 -74 -5z" />
                <path d="M1219 291 c-57 -58 -27 -169 51 -186 30 -7 100 10 100 24 0 16 -38 43 -45 32 -21 -34 -75 7 -75 57 0 37 28 56 69 47 39 -8 64 21 36 41 -10 8 -39 14 -63 14 -35 0 -49 -6 -73 -29z" />
                <path d="M1450 216 l0 -106 30 0 c28 0 30 2 30 40 0 39 1 40 35 40 34 0 35 -1 35 -40 0 -36 3 -40 25 -40 l25 0 0 105 c0 105 0 105 -24 105 -22 0 -25 -5 -28 -42 -3 -40 -5 -43 -33 -43 -27 0 -30 3 -35 40 -4 35 -9 40 -32 43 l-28 3 0 -105z" />
                <path d="M1840 215 l0 -105 75 0 c63 0 76 3 85 19 12 24 13 68 1 75 -5 3 -6 26 -4 51 5 41 4 45 -21 55 -15 5 -52 10 -82 10 l-54 0 0 -105z m105 35 c0 -23 -49 -20 -53 3 -3 15 2 18 25 15 17 -2 28 -9 28 -18z m0 -75 c0 -22 -31 -33 -47 -17 -17 17 -1 44 24 40 15 -2 23 -10 23 -23z" />
                <path d="M2100 241 c0 -70 3 -83 24 -108 20 -23 32 -28 70 -28 71 0 88 24 94 130 l5 85 -32 0 -31 0 0 -64 c0 -83 -6 -96 -40 -96 -34 0 -40 13 -40 96 0 62 -1 64 -25 64 -25 0 -25 -1 -25 -79z" />
                <path d="M2380 215 l0 -105 25 0 25 0 0 105 0 105 -25 0 -25 0 0 -105z" />
                <path d="M2530 216 l0 -106 75 0 c68 0 75 2 75 20 0 17 -7 20 -45 20 l-44 0 -3 83 c-3 81 -3 82 -30 85 l-28 3 0 -105z" />
                <path d="M2750 215 l0 -105 64 0 c59 0 67 3 95 31 24 23 31 40 31 68 0 69 -53 111 -140 111 l-50 0 0 -105z m112 38 c20 -18 24 -63 6 -81 -7 -7 -22 -12 -35 -12 -21 0 -23 4 -23 55 0 60 15 71 52 38z" />
              </g>
            </svg>
          </a>
        </div>

        {/* Search bar */}
        <div className="h-10 ml-2 sm:ml-0 flex w-4/5 sm:w-2/5">
          <input
            type="text"
            placeholder="Buscar productos o marcas"
            className="input bg-zinc-300 dark:bg-stone-800 border-stone-500 placeholder:text-stone-400 text-stone-800 dark:text-zinc-200 w-full h-full rounded-e-none focus:outline-0 focus:border-stone-500"
          />
          <button class="btn bg-stone-800 dark:bg-zinc-200 pl-2 pr-2 min-h-1 h-full rounded-s-none border-none hover:bg-stone-700 dark:hover:bg-stone-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-zinc-200 dark:text-stone-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Cart */}
        <div className="flex-none gap-2 ml-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-transparent"
              onClick={toggleDropdown}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-stone-800 dark:text-zinc-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-stone-800 dark:bg-stone-500 text-zinc-200">
                  0
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-zinc-200 dark:bg-stone-800  shadow"
            >
              {isOpen && (
                <div className="card-body">
                  <span className="text-stone-800 dark:text-zinc-200 font-bold text-lg">
                    0 Productos
                  </span>
                  <span className="text-green-600 font-semibold">
                    Subtotal: $000
                  </span>
                  <div className="card-actions">
                    <button className="btn bg-green-400 text-stone-800 hover:bg-green-300 duration-500 btn-block active:!bg-green-500 active:!text-stone-900">
                      Ver Carrito
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <label className="swap swap-rotate relative ml-1">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />

          {/* Sun icon */}
          <svg
            className="swap-on fill-current text-zinc-200 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-off fill-current text-stone-800 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>

      {/* Bottom navbar */}
      <div className="navbar min-h-14 h-14 bg-stone-900 dark:bg-stone-700 flex justify-between">
        <div>
          {/* Categories */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-stone-900 focus:bg-transparent hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
              onClick={toggleDropdown}
            >
              Categorías{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="flex overflow-y-scroll md:overflow-auto max-h-[60dvh] flex-row justify-start dropdown-content z-[1] menu p-2 shadow text-stone-900 bg-zinc-200 dark:bg-stone-700 rounded-box rounded-t-none w-60 md:w-[96vw]"
              >
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <Link to="/products/storage" className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Almacenamiento</Link>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Auriculares y micrófonos</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Celulares y smartwatchs</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Disipadores</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Fuentes de poder</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Gabinetes</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Memorias ram</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Monitores</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Motherboards</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Notebooks</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Parlantes</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Placas de video</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Procesadores</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Sillas gamer</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Tablets</a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Teclados y mouse</a>
                </li>
                <li className="w-full md:w-1/5 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">Volantes</a>
                </li>
              </ul>
            )}
          </div>
          <Link to="/"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Inicio
          </Link>
          <Link to="/about-us"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Sobre Nosotros
          </Link>
          <Link to="/contact-us"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Contáctanos
          </Link>
        </div>

        {/* Profile */}
        <div className="flex-none hidden sm:inline-block">
          <div className="dropdown dropdown-end duration-300">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleDropdown}
            >
              <div className="w-8 rounded-full">
                <img
                  alt="Imagen de perfil"
                  src={require("../../../images/Profile.jpg")}
                />
              </div>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm font-semibold dropdown-content z-[1] p-2 mt-1 shadow text-stone-900 bg-zinc-200 dark:bg-stone-700 dark:text-zinc-200 rounded-box rounded-t-none w-52"
              >
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-stone-700 focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Mi Perfil
                  </a>
                </li>
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-stone-700 focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ajustes
                  </a>
                </li>
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-stone-700 focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="flex-none sm:hidden">
          <div className="dropdown dropdown-end duration-300">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-transparent"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-zinc-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="mt-1 menu menu-sm font-semibold dropdown-content z-[1] p-2 shadow text-stone-900 dark:text-zinc-200 bg-zinc-200 dark:bg-stone-700  rounded-box rounded-t-none w-52"
              >
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <Link to="/" className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Inicio
                  </Link>
                </li>
                <li className="mb-2">
                  <details>
                    <summary className="active:!bg-green-200 active:!text-stone-900 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Cuenta
                    </summary>
                    <ul className="mt-2 border-l-[1.5px] border-l-stone-500">
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Mi Perfil
                        </a>
                      </li>
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Ajustes
                        </a>
                      </li>
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Cerrar Sesión
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <Link to="/about-us" className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <Link to="/contact-us" className="active:!bg-green-200 active:!text-stone-900 focus:bg-zinc-200 focus:text-stone-900 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contáctanos
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
