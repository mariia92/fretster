import React from "react";
import guitars from "../images/guitars.png";
import violine from "../images/violine.png";
import guitar_band from "../images/guitar_band.png";
import { tiles } from "./PresentationTiles";
import "./Presentation.css";

const Tile = ({ title, imgSrc, text, button }) => {
  return (
    <div className="Tile">
      <img className="TileImage" src={imgSrc} alt={title} />
      <div className="TileTitle">{title}</div>
      <div className="TileDescription">{text}</div>
      <div className="TileButton">{button}</div>
    </div>
  );
};

const getImgSrc = (tile) => {
  const imageMap = { guitars, violine, guitar_band };
  return imageMap[tile.img];
};

const Presentation = ({ buttons, navigationHook }) => {
  return (
    <div className="Presentation">
      <div className="PresentationHeadline">who we are. what we do?</div>
      <div className="TileWrapper">
        {tiles.map((tile) => (
          <Tile {...tile} imgSrc={getImgSrc(tile)} />
        ))}
      </div>
    </div>
  );
};
export default Presentation;
