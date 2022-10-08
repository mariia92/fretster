import React from "react";
import Navigation from "./Navigation";
import "./Stage.css";

const Stage = (props) => {
  const { navigationButtons, navigationHook, children } = props;
  return (
    <div className="Stage">
      <div className="StageWrapper">
        <div className="LogoContainer" />
        <div className="StagePart-left" />
        <div className="StagePart-middle">
          <Navigation
            buttons={navigationButtons}
            navigationHook={navigationHook}
          />
          {children && children}
        </div>
        <div className="StagePart-right"/>
      </div>
    </div>
  );
};
export default Stage;
