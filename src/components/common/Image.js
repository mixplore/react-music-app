import React from "react";
import "./Image.scss";

export default function Image(props) {
  return <img className="cover-image" src={props.src} alt={`...`} height={props.height} />;
}
