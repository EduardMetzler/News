import React from "react";
import { Link } from "react-router-dom";
import { Advertising } from "../store/advertising/advertising.models";
interface ConnectedState {
  advertising: Advertising;
}

export const OneAdvertising: React.FC<ConnectedState> = ({ advertising }) => {
  return (
    <div className="row">
      <a href={advertising.url} target="_blank" rel="noopener noreferrer">
        <img
          className="col s12 "
          key={advertising.imageUrl}
          src={advertising.imageUrl}
        />
      </a>
    </div>
  );
};
