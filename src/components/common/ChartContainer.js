import React from "react";
import "./ChartContainer.scss";

export default function ChartContainer(props) {
  return <ul className="chart-container">{props.children}</ul>;
}

