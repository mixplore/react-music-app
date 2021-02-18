import React from "react";
import "./ChartCell.scss";

export default function ChartCell(props) {
  return <div className="cell">{props.children}</div>;
}
