import React from "react";
import "./SearchBar.scss";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for..."
        onChange={(e) => props.onValueChanged(e.target.value)}
      />
    </div>
  );
}
