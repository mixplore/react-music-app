import React from "react";
import { render } from "@testing-library/react";
import ChartContainer from "./ChartContainer";

describe(`#render`, () => {
  test(`Has rendered the chart list correctly - no children`, () => {
    const { getByRole } = render(<ChartContainer></ChartContainer>);
    let ul = getByRole("list");
    expect(ul.children.length).toEqual(0);
  });
  test(`Has rendered the chart list correctly - 3 children`, () => {
    const { getByRole } = render(
      <ChartContainer>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ChartContainer>
    );
    let ul = getByRole("list");
    expect(ul.children.length).toEqual(3);
  });
});
