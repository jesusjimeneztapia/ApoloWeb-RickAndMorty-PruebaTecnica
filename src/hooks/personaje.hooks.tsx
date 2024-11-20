import Toast from "@components/shared/Toast";
import { DEFAULT_CHARACTER_IMAGE } from "@constants/character";
import { TOAST_OPTIONS } from "@constants/toast";
import { joiResolver } from "@hookform/resolvers/joi";
import { messages } from "@joi-tools/translator";
import { useACharacterStore } from "@stores/character.store";
import Joi from "joi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CreateCharacterDto } from "types";

const schema = Joi.object<CreateCharacterDto>({
  name: Joi.string().min(3).required().label("nombre"),
  species: Joi.string()
    .allow(
      "alien",
      "animal",
      "cronenberg",
      "disease",
      "human",
      "humanoid",
      "mythological creature",
      "poopybutthole",
      "robot",
      "unknown"
    )
    .required()
    .label("especie"),
  gender: Joi.string()
    .allow("female", "male", "genderless", "unknown")
    .required()
    .label("género"),
  status: Joi.string()
    .allow("alive", "dead", "unknown")
    .required()
    .label("estado"),
  image: Joi.string().allow("").uri().optional().label("imagen"),
}).messages(messages.es as never);

export function useCharacter() {
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get("id") != null;
  const character = useACharacterStore((state) => state.character);
  const findCharacter = useACharacterStore((state) => state.findCharacter);
  const loading = useACharacterStore((state) => state.loading);
  const reset = useACharacterStore((state) => state.reset);

  useEffect(() => {
    if (isEdit) {
      const id = searchParams.get("id");
      // eslint-disable-next-line
      findCharacter(id as never);
    } else {
      // eslint-disable-next-line
      reset();
    }
    // eslint-disable-next-line
  }, [isEdit]);

  return { isEdit, character, loading };
}

interface useCreateCharacterProps {
  defaultValues?: CreateCharacterDto;
}

export function useCharacterForm({
  defaultValues,
}: useCreateCharacterProps = {}) {
  const navigate = useNavigate();
  const updateCharacter = useACharacterStore((state) => state.updateCharacter);

  const { handleSubmit: onSubmit, ...form } = useForm<CreateCharacterDto>({
    mode: "onSubmit",
    defaultValues,
    resolver: joiResolver(schema),
  });

  const createCharacter = useACharacterStore((state) => state.createCharacter);

  const handleSubmit = onSubmit(async (data, event) => {
    event?.preventDefault();
    let image = data.image;
    if (!image) {
      image = DEFAULT_CHARACTER_IMAGE;
    }
    try {
      if (defaultValues) {
        await updateCharacter({ ...data, image });
        toast.custom(
          <Toast message="Personaje Actualizado!" color="blue" />,
          TOAST_OPTIONS
        );
      } else {
        await createCharacter({ ...data, image });
        toast.custom(
          <Toast message="Personaje creado!" color="green" />,
          TOAST_OPTIONS
        );
      }
      // eslint-disable-next-line
    } catch (error) {
      toast.custom(
        <Toast message="Ocurrió algún error, intente más tarde" icon="error" />,
        TOAST_OPTIONS
      );
    }
    navigate("/");
  });

  return { ...form, handleSubmit };
}
