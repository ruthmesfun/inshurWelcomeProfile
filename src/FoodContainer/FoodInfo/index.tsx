import  React from "react";
import Heading from "../../shared/Heading";
import "./FoodInfo.css";

const FoodInfo = ({ name, image }: FoodInfoType): JSX.Element => (
  <div className="FoodInfo" data-testid="food-info">
    <img src={image} alt={name} />
    <Heading text={name} header="h4" />
  </div>
);

export interface FoodInfoType {
  name: string;
  image: string;
}

export default FoodInfo;
