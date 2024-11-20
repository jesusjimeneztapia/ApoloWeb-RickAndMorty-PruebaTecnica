import logo from "@assets/images/logo.webp";
import LogOutIcon from "@icons/LogOutIcon";
import MenuIcon from "@icons/MenuIcon";
import XIcon from "@icons/XIcon";
import { useAuthStore } from "@stores/auth.store";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const token = useAuthStore((state) => state.token);
  const logOut = useAuthStore((state) => state.logOut);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const toggleOpenMenu = () => {
    setShowMenu((show) => !show);
  };

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-30">
      <div className="container px-6 py-1.5 mx-auto flex justify-between items-center lg:max-w-5xl xl:px-0">
        <img className="aspect-[46/49] my-0.5 h-11" src={logo} alt="Logo" />
        {token && (
          <button
            className="size-6 text-intergalactic-black/55 hover:text-intergalactic-black md:hidden"
            onClick={toggleOpenMenu}
          >
            {showMenu ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        )}
        {token && (
          <nav
            className={`
            absolute block top-full left-0 w-screen h-[calc(100vh-60px)] bg-white border-t py-12 transition-all duration-300 ease-in-out
            md:relative md:top-0 md:left-0 md:w-fit md:h-fit md:bg-transparent md:border-0 md:py-0 md:transition-none md:inline-block
            ${showMenu ? "left-0" : "left-full"}
          `}
          >
            <ul className="container mx-auto px-6 font-karla text-2xl font-bold flex flex-col items-center gap-y-12 md:px-0 md:text-lg md:flex-row md:items-center md:gap-x-6">
              <li>
                <Link
                  className={`${
                    location.pathname === "/"
                      ? "text-ricks-hair-blue"
                      : "hover:text-sombre-pink"
                  }`}
                  to="/"
                >
                  Personajes
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    location.pathname === "/personaje" &&
                    !location.search.includes("id=")
                      ? "text-ricks-hair-blue"
                      : "hover:text-sombre-pink"
                  }`}
                  to="/personaje"
                >
                  Crear Personaje
                </Link>
              </li>
              <li className="w-full md:w-fit">
                <button
                  className="w-full flex justify-center items-center gap-x-2 py-3.5 px-4 bg-morty-red/85 shadow rounded text-xl font-medium uppercase text-white hover:bg-morty-red hover:shadow-md md:w-fit md:py-2.5 md:text-base"
                  onClick={handleLogOut as never}
                >
                  <i>
                    <LogOutIcon className="size-6" />
                  </i>
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
