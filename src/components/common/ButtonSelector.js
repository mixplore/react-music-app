import React from "react";
import "./ButtonSelector.scss";

export default function ButtonSelector({ buttons, selectedButton, onButtonSelect }) {
  return (
    <div role="radiogroup" className="button-selector">
      {buttons.map((btn) => (
        <div key={btn.id}>
          <input
            id={btn.id}
            className="select-button"
            type="radio"
            name="select-option"
            value={btn.value}
            checked={selectedButton === btn.id}
            onChange={onButtonSelect}
          />
          <label htmlFor={btn.id}>{btn.title}</label>
        </div>
      ))}
    </div>
  );
}
