import React from "react";
import "./Title.scss";

export default function Title({ text }) {
  return (
    <h2 className="title">
      {text}
    </h2>
  );
}
