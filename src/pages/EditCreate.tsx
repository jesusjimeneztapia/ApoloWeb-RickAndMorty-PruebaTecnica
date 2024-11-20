import EditCreateCharacterForm from "@components/personaje/EditCreateCharacterForm";
import { useCharacter } from "@hooks/personaje.hooks";
import rickAndMorty from "@assets/images/rick-and-morty.webp";

export default function EditCreate() {
  const { isEdit, character, loading } = useCharacter();

  return (
    <div className="my-auto md:grid md:grid-cols-2 md:bg-white md:shadow-lg md:border md:rounded-lg md:overflow-hidden">
      <div
        className={`
      w-full max-w-lg px-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:relative md:flex md:items-center md:justify-center md:row-start-1 lg:justify-center
      ${
        isEdit
          ? "md:col-start-1 md:bg-ricks-hair-blue"
          : "md:col-start-2 md:bg-portal-green"
      }
    `}
      >
        <img
          className="aspect-[270/210] w-full lg:h-auto"
          src={rickAndMorty}
          alt=""
        />
      </div>
      {!loading && (
        <EditCreateCharacterForm
          {...(character == null
            ? {}
            : {
                character: {
                  name: character.name,
                  gender: character.gender,
                  species: character.species,
                  status: character.status,
                  image: character.image,
                },
              })}
        />
      )}
    </div>
  );
}
