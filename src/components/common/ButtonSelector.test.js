import React from "react";
import renderer from "react-test-renderer";
import ButtonSelector from "./ButtonSelector";

describe(`#render`, () => {
  test("Snapshot test - Buttons are rendered correctly", () => {
    const buttons = [
      {
        id: "test-id1",
        value: "test-value1",
        title: "Test 1"
      },
      {
        id: "test-id2",
        value: "test-value2",
        title: "Test 2"
      },
    ];
    const selectedButton = "test-id1";
    const onButtonSelect = jest.fn();
    const component = renderer.create(
      <ButtonSelector
        buttons={buttons}
        selectedButton={selectedButton}
        onButtonSelect={onButtonSelect}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
