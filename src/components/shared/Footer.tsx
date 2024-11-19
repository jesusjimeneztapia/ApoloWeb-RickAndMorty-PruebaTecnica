import banner from "@assets/images/banner.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container px-6 py-1.5 mx-auto flex justify-between items-center lg:max-w-5xl xl:px-0">
        <ul className="w-full flex flex-wrap gap-x-6 gap-y-4 justify-center pt-4 sm:items-center">
          <li className="w-full h-12 sm:h-20 sm:w-fit">
            <img className="h-full mx-auto" src={banner} alt="Rick y Morty" />
          </li>
          <li className="sm:ml-auto">
            <a
              className="text-sm font-semibold text-intergalactic-black/75 hover:text-sombre-pink"
              href="https://rickandmortyapi.com"
              target="_blank"
              rel="noreferrer"
            >
              API
            </a>
          </li>
          <li>
            <a
              className="text-sm font-semibold text-intergalactic-black/75 hover:text-sombre-pink"
              href="https://github.com/jesusjimeneztapia/ApoloWeb-RickAndMorty-PruebaTecnica"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-sm font-semibold text-intergalactic-black/75 hover:text-sombre-pink"
              href="mailto:jesusjimeneztapia456@gmail.com"
            >
              Contacto
            </a>
          </li>
          <li className="w-full text-intergalactic-black/60 border-t py-3 text-center text-xs">
            <small>© 2024 Rick y Morty.</small>
          </li>
        </ul>
      </div>
    </footer>
  );
}
