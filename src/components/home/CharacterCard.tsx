import { CSSProperties, FC } from "react";
import styles from "./CharacterCard.module.css";
import CharacterStatus from "./CharacterStatus";
import { Character } from "types";

interface CharacterCardProps
  extends Pick<Character, "image" | "name" | "species" | "status"> {
  order: number;
}

const CharacterCard: FC<CharacterCardProps> = ({
  image,
  name,
  species,
  status,
  order,
}) => {
  const style = { "--order-card": order } as CSSProperties;

  return (
    <>
      <article
        className={`overflow-hidden rounded shadow w-full opacity-0 group transition-all duration-300 ease-linear hover:shadow-xl hover:scale-105 sm:max-w-72 md:max-w-56 lg:max-w-[312px] xl:max-w-60 ${styles.card}`}
        style={style}
        title={name}
      >
        <figure className="aspect-[312/232] w-full bg-slimy-yellow overflow-hidden">
          <img
            className="object-cover object-center bg-no-repeat w-full h-full transition-all duration-300 ease-linear group-hover:scale-110"
            src={image}
            alt={name}
          />
        </figure>
        <footer className="px-4 py-3">
          <h4 className="text-xl font-semibold text-intergalactic-black/85 w-full overflow-hidden text-ellipsis text-nowrap">
            {name}
          </h4>
          <div className="flex justify-between">
            <small className="text-xs text-intergalactic-black/60">
              {species}
            </small>
            <CharacterStatus status={status} />
          </div>
        </footer>
      </article>
    </>
  );
};

export default CharacterCard;
