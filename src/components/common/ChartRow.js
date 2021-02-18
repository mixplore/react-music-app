import React from "react";
import "./ChartRow.scss";

export default function ChartRow(props) {
  return <li className={`row ${props.isHeader && 'header'}`}>{props.children}</li>;
}
