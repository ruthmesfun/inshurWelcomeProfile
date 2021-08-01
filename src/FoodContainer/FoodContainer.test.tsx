import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FOOD_LIST } from "./constant";
import FoodContainer from ".";

test("keeps original food list when initially rendered", () => {
  const { getByAltText } = render(<FoodContainer />);

  FOOD_LIST.forEach(({ name, image }) => {
    const imgElement = getByAltText(name);
    expect(imgElement).toHaveAttribute("src", image);
  });
});

test("updates food list when search is implemented", () => {
  const { getByLabelText, getAllByTestId, getByAltText } = render(
    <FoodContainer />
  );

  fireEvent.change(getByLabelText(/Check if we like the same food!/i), {
    target: { value: "burger" },
  });

  const result = getAllByTestId("food-info");
  getByAltText("Cheese Hamburger");
  expect(result.length).toEqual(1);
});