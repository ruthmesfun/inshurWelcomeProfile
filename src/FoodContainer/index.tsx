import React, { useState, useEffect } from "react";
import FoodInfo, { FoodInfoType } from "./FoodInfo";
import Heading from "../shared/Heading";
import SearchBar from "../SearchBar";
import { FOOD_LIST } from "./constant";
import "./FoodContainer.css";

const FoodContainer = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");
  const [foodList, setFoodList] = useState(FOOD_LIST);
  const [resultMatch, setResultMatch] = useState(true);

  useEffect(() => {
    let filteredResults: FoodInfoType[] = FOOD_LIST;
    if (searchInput.length > 0) {
      filteredResults = FOOD_LIST.filter(({ name }) =>
        name.toLowerCase().includes(searchInput)
      );
    }
    if (filteredResults.length === 0) {
      setResultMatch(false);
      filteredResults = FOOD_LIST;
    } else {
      setResultMatch(true);
    }
    return setFoodList(filteredResults);
  }, [searchInput]);

  return (
    <div className="FoodContainer">
      <SearchBar
        label="Check if we like the same food!"
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      {!resultMatch && (
        <Heading
          header="h3"
          text="Unfortunately, we don't like the same food, but check out what I do like!"
          color="light"
        />
      )}
      <div className="FoodContainer__food">
        {foodList.map(({ name, image }: FoodInfoType) => (
          <FoodInfo name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default FoodContainer;
