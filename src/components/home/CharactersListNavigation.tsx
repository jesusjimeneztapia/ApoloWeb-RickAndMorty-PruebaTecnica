import { useCharactersListNavigation } from "@hooks/home.hooks";
import ChevronLeftIcon from "@icons/ChevronLeftIcon";
import ChevronRightIcon from "@icons/ChevronRightIcon";
import { FC } from "react";
import { RequestInfo } from "types";

type CharactersListNavigationProps = Pick<RequestInfo, "next" | "prev">;

const CharactersListNavigation: FC<CharactersListNavigationProps> = () => {
  const { prev, next, handleNavigation } = useCharactersListNavigation();

  return (
    <ul className="w-full flex justify-end gap-x-3">
      <li>
        <button
          className="size-10 bg-ricks-hair-blue rounded-full flex justify-center items-center text-white hover:bg-sombre-pink disabled:bg-ricks-hair-blue/70"
          title="Anterior"
          disabled={prev == null}
          onClick={handleNavigation("prev")}
        >
          <ChevronLeftIcon className="size-6" />
        </button>
      </li>
      <li>
        <button
          className="size-10 bg-ricks-hair-blue rounded-full flex justify-center items-center text-white hover:bg-sombre-pink disabled:bg-ricks-hair-blue/70"
          title="Siguiente"
          disabled={next == null}
          onClick={handleNavigation("next")}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </li>
    </ul>
  );
};

export default CharactersListNavigation;
