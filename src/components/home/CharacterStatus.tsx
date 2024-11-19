import type { FC } from "react";
import type { Character, CharacterStatus } from "types";

type CharacterStatusProps = Pick<Character, "status">;

const STATUS_COLORS: Record<
  CharacterStatus,
  { className: string; label: string }
> = {
  Alive: { className: "text-portal-green", label: "Vivo" },
  Dead: { className: "text-morty-red", label: "Muerto" },
  unknown: { className: "text-alien-purple", label: "Desconocido" },
};

const CharacterStatus: FC<CharacterStatusProps> = ({ status }) => {
  const { className, label } = STATUS_COLORS[status] ?? STATUS_COLORS.unknown;
  return <small className={`text-xs ${className}`}>{label}</small>;
};

export default CharacterStatus;
