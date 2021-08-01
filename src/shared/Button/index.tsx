import  React, { ReactNode } from "react";
import "./Button.css";

const Button = ({ children, onClickFn }: ButtonType): JSX.Element => {
  const handleClick = () => onClickFn(true);

  return (
    <div className="Button">
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

type onClickFnType = (a: boolean) => void;

interface ButtonType {
  children: ReactNode;
  onClickFn: onClickFnType
}
export default Button;
