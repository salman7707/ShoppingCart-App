import { ReactNode } from "react";

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  paddingSmall?: boolean;
  fontSize?: "regular" | "large";
  semiBold?: boolean;
  rounded?: boolean;
  transitionEffects?: string;
  isValid?: boolean;
  loading?: boolean;
  width?: string;
  isNavButton?: boolean;
  marginTop?: string;
  marginBottom?: string;
  dotted?: boolean;
  borderRadius?: string;
  flex?: boolean;
  borderColor?: string;
  large?:boolean;
}
interface MainButtonProps extends ButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function mainBtn({
  children,
  handleClick,
  isValid = true,
  loading = false,
  paddingSmall,
  rounded,
  semiBold,
  backgroundColor = "bg-yellow-500",
  fontSize,
  width,
  transitionEffects,
  color = "text-dark-blue",
  type = "button",
  marginTop,
  marginBottom,
  borderRadius,
  flex,
  large
}: MainButtonProps) {
  const buttonClasses = `
    ${backgroundColor}
    ${large ? "transition-transform duration-500 text-white hover:scale-105":"hover:bg-blue-500 text-sm px-3 py-3 text-white bg-blue-800"}
    ${color}
    ${paddingSmall ? "px-6 py-3" : "px-12 py-3"}
    ${fontSize === "regular" ? "text-sm" : "text-lg"}
    ${semiBold ? "font-semibold" : "font-bold"}
    ${
        transitionEffects
    }
    ${rounded ? "rounded-lg" : ""}
    ${borderRadius ? borderRadius : ""}
    ${
      !isValid || loading
        ? "opacity-50 cursor-not-allowed"
        : "hover:shadow-lg hover:translate-y-[-2px]"
    }
    ${width || ""}
    ${marginTop || ""}
    ${marginBottom || ""}
    ${flex ? "flex" : ""}
    flex gap-2 justify-center items-center transition-all duration-500
    `;
  return (
    <button
      onClick={handleClick}
      disabled={!isValid || loading}
      className={buttonClasses}
      type={type}
    >
      {children}
    </button>
  );
}
