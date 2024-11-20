import XIcon from "@icons/XIcon";
import { FC, ReactNode } from "react";

type ToastColor = "white" | "blue" | "green" | "red";
type ToastIcon = "error" | "success";

interface ToastProps {
  message: string;
  color?: ToastColor;
  icon?: ToastIcon;
}

const COLORS: Record<ToastColor, string> = {
  white: "bg-white text-intergalactic-black",
  blue: "bg-ricks-hair-blue text-white",
  green: "bg-portal-green text-white",
  red: "bg-morty-red text-white",
};

const ICONS: Record<ToastIcon, ReactNode> = {
  error: (
    <i className="inline-flex justify-center items-center bg-white size-5 rounded-full">
      <XIcon className="text-morty-red size-4" />
    </i>
  ),
  success: (
    <i className="inline-flex justify-center items-center bg-white size-5 rounded-full">
      <XIcon className="text-portal-green size-4" />
    </i>
  ),
};

const Toast: FC<ToastProps> = ({ message, icon, color = "white" }) => {
  return (
    <div
      className={`py-2.5 px-4 min-w-56 max-w-80 rounded-lg shadow-lg ${
        icon
          ? icon === "success"
            ? COLORS.green
            : COLORS.red
          : COLORS[color] ?? COLORS.white
      }`}
    >
      {icon && ICONS[icon]}
      <p className={`inline ${icon && "ml-2"}`}>{message}</p>
    </div>
  );
};

export default Toast;
