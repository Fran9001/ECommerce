import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex flex-col p-0">
      {/* Top navbar */}
      <div className="navbar bg-zinc-200 flex justify-between sm:justify-center">
        {/* Name/Logo */}
        <div>
          <a href="#" className="px-0 mr-6 sm:px-2 sm:mr-2 btn btn-ghost text-xl text-stone-800 hover:bg-zinc-300">
            <img src={require("../../images/Tech Build.png")} alt="Tech Build Logo" className="h-12" />
          </a>
        </div>

        {/* Search bar */}
        <div className="h-10 flex w-4/5 sm:w-2/5">
          <input
            type="text"
            placeholder="Buscar productos o marcas"
            className="input bg-zinc-300 border-stone-500 placeholder:text-stone-400 text-stone-800 w-full h-full rounded-e-none focus:outline-0 focus:border-stone-500"
          />
          <button class="btn bg-stone-800 text-zinc-200 pl-2 pr-2 min-h-1 h-full rounded-s-none border-none hover:bg-stone-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-zinc-200"
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
              className="btn btn-ghost btn-circle hover:bg-zinc-300"
              onClick={toggleDropdown}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-stone-800"
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
                <span className="badge badge-sm indicator-item bg-stone-800 text-zinc-200">
                  0
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-zinc-200 shadow"
            >
              {isOpen && (
              <div className="card-body">
                <span className="text-stone-800 font-bold text-lg">0 Productos</span>
                <span className="text-green-600 font-semibold">Subtotal: $000</span>
                <div className="card-actions">
                  <button className="btn bg-green-400 text-stone-800 hover:bg-green-300 duration-500 btn-block">
                    Ver Carrito
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="navbar min-h-14 h-14 bg-stone-900 flex justify-between">
        <div>
          {/* Categories */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-stone-900 text-zinc-200 text-base border-none hover:bg-stone-900 active:bg-stone-700"
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
                className="flex flex-row justify-start dropdown-content z-[1] menu p-2 shadow text-stone-900 bg-zinc-200 rounded-box w-[98vw]"
              >
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Almacenamiento</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 border-zinc-200 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Auriculares y micrófonos</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Celulares y smartwatchs</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Disipadores</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Fuentes de poder</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Gabinetes</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Memorias ram</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Monitores</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Motherboards</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Notebooks</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Parlantes</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Placas de video</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Procesadores</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Sillas gamer</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Tablets</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Teclados y mouse</a>
                </li>
                <li className="w-[50%] md:w-1/5 mb-6 font-semibold hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a>Volantes</a>
                </li>
              </ul>
            )}
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 text-zinc-200 text-base border-none hover:bg-stone-900 active:bg-stone-700"
          >
            Inicio
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 text-zinc-200 text-base border-none hover:bg-stone-900 active:bg-stone-700"
          >
            Sobre Nosotros
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 text-zinc-200 text-base border-none hover:bg-stone-900 active:bg-stone-700"
          >
            Contáctanos
          </a>
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
                  alt="Tailwind CSS Navbar component"
                  src={require("../../images/Profile.jpg")}
                />
              </div>
            </div>
            {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content z-[1] p-2 mt-1 shadow text-stone-900 bg-zinc-200 rounded-box w-52"
            >
              <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                <a>Mi Perfil</a>
              </li>
              <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                <a>Ajustes</a>
              </li>
              <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                <a>Cerrar Sesión</a>
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
              className="btn btn-ghost btn-circle"
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
                className="mt-1 menu menu-sm font-semibold dropdown-content z-[1] p-2 shadow text-stone-900 bg-zinc-200 rounded-box w-52"
              >
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a>Inicio</a>
                </li>
                <li className="mb-2">
                  <details>
                    <summary className=" hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                      Cuenta
                    </summary>
                    <ul className="mt-2 border-l-[1.5px] border-l-stone-500">
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a>Mi Perfil</a>
                      </li>
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a>Ajustes</a>
                      </li>
                      <li className="mb-1 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                        <a>Cerrar Sesión</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a>Sobre Nosotros</a>
                </li>
                <li className="hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
                  <a>Contáctanos</a>
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
