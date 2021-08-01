import React from "react";
import "./Image.css";

const Image = ({ src, altText }: ImageType): JSX.Element => {
  return (
    <div className="Image">
      <img src={src} alt={altText} className="Image__img" />
    </div>
  );
};

interface ImageType {
  src: string;
  altText: string;
}
export default Image;
