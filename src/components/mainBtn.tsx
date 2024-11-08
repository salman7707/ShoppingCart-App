import { ReactNode, useState } from "react";

interface MainButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  background?: string;
  flex?: string;
  border?: string;
  width?:string;
  height?:string;
  variant?:string
  effects?: string;
  padding?: string;
  margin?: string;
  size?: "small" | "large";
  putDefaultClass?: string;
}

export default function MainBtn({
  background,
  flex,
  width,
  height,
  border,
  variant="",
  effects,
  padding,
  margin,
  size="small",
  putDefaultClass,
  handleClick,
  children,
}: MainButtonProps) {
  const btnClassess = {
    background,
    width,
    height,
    flex,
    border,
    effects,
    padding,
    margin,
    variant,
    size:size==="large"? "btn":"btnSmall",
    putDefaultClass,
  };
  const [btn, setbtn] = useState(false);

  function handlestate() {
    setbtn(!btn);
  }

  return (
    <button
      onClick={() => {
        handlestate();
        handleClick?.();
      }}
      className={`${btnClassess} ${ btn ? (size === "large"?"btnafterclicklarge":( variant === "red"?"btnafterclicksmall2":"btnafterclicksmall")) :  (size==="small" ? (variant ==="red"? "btnSmall2":"btnSmall") : "btn")} `}
    >
      {children}
    </button>
  );
}
