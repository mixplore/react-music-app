import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./FavouriteIcon.scss";

export default function FavouriteIcon(props) {
  return (
    <div className="icon" onClick={props.onSetFavourite}>
      {props.isFavourite ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
    </div>
  );
}
