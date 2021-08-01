import React, { useState } from "react";
import Image from "../shared/Image";
import Heading from "../shared/Heading";
import Button from "../shared/Button";
import FoodContainer from "../FoodContainer";
import portfolioImg from "../images/portfolio_pic.png";
import "./HomePageContainer.css";

const HomePageContainer = (): JSX.Element => {
  const [openFoodListContainer, setFoodListContainer] = useState(false);

  return (
    <div className="HomePageContainer">
      <div className="HomePageContainer__profile">
        <Image src={portfolioImg} altText="Ruth Mesfun Image" />
        <div className="HomePageContainer__text">
          <div className="HomePageContainer__intro">
            <Heading text="HI! I'M RUTH" header="h1" addSlash />
            <Heading text="Lead Front End Engineer @INSHUR" header="h2" />
          </div>
          {!openFoodListContainer && (
            <Button onClickFn={setFoodListContainer}>
              <Heading text="+ Check out my favorite food" header="h3" />
            </Button>
          )}
        </div>
      </div>
      {openFoodListContainer && (
        <div className="HomePageContainer__foodContainer">
          <FoodContainer />
        </div>
      )}
    </div>
  );
};

export default HomePageContainer;
