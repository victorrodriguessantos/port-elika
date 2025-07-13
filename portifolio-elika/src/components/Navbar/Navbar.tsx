import { useState } from 'react';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    // <nav className="mb-5 shadow rounded-2xl shadow-lime-400/50 px-10">

    <nav className="fixed top-0 left-0 right-0 bg-white shadow rounded-b-2xl shadow-lime-400/50 px-10">
      <div className="relative mx-auto px-2 sm:px-6 lg:px-8 flex justify-around">

        <div className="relative flex h-20 items-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#a6ff00] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuAberto}
            >
              <span className="sr-only">Abrir menu principal</span>

              {/* Ícone de menu (hambúrguer) */}
              <svg
                className={`${menuAberto ? 'hidden' : 'block'} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* Ícone de X (fechar) */}
              <svg
                className={`${menuAberto ? 'block' : 'hidden'} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="rounded-md bg-lime-400 px-3 py-2 text-xl font-medium text-white">Home</a>
                <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-lime-400 hover:bg-lime-400 hover:text-white">Sobre mim</a>
                <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-lime-400 hover:bg-lime-400 hover:text-white">Galeria</a>
                <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-lime-400 hover:bg-lime-400 hover:text-white">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`sm:hidden ${menuAberto ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre mim</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Galeria</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
