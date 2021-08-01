import React from "react";
import classnames from "classnames";
import "./Heading.css";

const Heading = ({
  text,
  header,
  addSlash = false,
  color = "dark",
}: HeadingType): JSX.Element => {
  const slashElement = addSlash && <span className="Heading__slash">/</span>;
  const isDark = color === "dark";
  const headingClassName = classnames("Heading__text", {
    "Heading__text--dark": isDark,
    "Heading__text--light": !isDark,
  });
  return (
    <div className="Heading">
      {header === "h4" && (
        <h4 className={headingClassName}>
          {text} {slashElement}
        </h4>
      )}
      {header === "h3" && (
        <h3 className={headingClassName}>
          {text} {slashElement}
        </h3>
      )}
      {header === "h2" && (
        <h2 className={headingClassName}>
          {text}
          {slashElement}
        </h2>
      )}
      {header === "h1" && (
        <h1 className={headingClassName}>
          {text}
          {slashElement}
        </h1>
      )}
    </div>
  );
};

interface HeadingType {
  text: string;
  header: "h3" | "h2" | "h1" | "h4";
  addSlash?: boolean;
  color?: "dark" | "light";
}
export default Heading;
