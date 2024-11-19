import { FC } from "react";

const Menu2Icon: FC<IconProps> = ({ className = "size-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M7 6h10M4 12h16M7 12h13M7 18h10" />
    </svg>
  );
};

export default Menu2Icon;
