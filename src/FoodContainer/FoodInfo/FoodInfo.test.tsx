import React from "react";
import { render } from "@testing-library/react";
import { FOOD_LIST } from "../constant";
import FoodInfo from ".";

test("renders image", () => {
  const { name, image } = FOOD_LIST[0];
  const { getByAltText } = render(<FoodInfo name={name} image={image} />);

  const imgElement = getByAltText(name);
  expect(imgElement).toHaveAttribute("src", image);
});

test("alt text is name of Food", () => {
  const { name, image } = FOOD_LIST[0];
  const { getByAltText } = render(<FoodInfo name={name} image={image} />);

  getByAltText(name);
});

test("renders food name", () => {
  const { name, image } = FOOD_LIST[0];
  const { getByText } = render(<FoodInfo name={name} image={image} />);
  getByText(name);
});
