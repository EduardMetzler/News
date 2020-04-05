import React from "react";
import { OneAdvertising } from "./oneAdvertising";
import { Advertising } from "../store/advertising/advertising.models";
interface ConnectedState {
  advertisings: Advertising[];
  // advertising: Advertising;
}

export const AdvertisingLeft: React.FC<ConnectedState> = ({ advertisings }) => {
  return (
    <>
      {advertisings.map(advertising => {
        return (
          <div key={advertising.imageUrl}>
            {/* //   <div className="col s12"> */}
            <OneAdvertising advertising={advertising} />
            {/* //   </div> */}
          </div>
        );
      })}
    </>
  );
};
