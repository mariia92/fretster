import React from "react";
import classNames from "classnames";
import "./TwoSider.css";

const TwoSider = ({ children, img, isReversedOrder, fill, isProportional }) => {
  return (
    <div className={classNames("TwoSider", { isReversed: isReversedOrder })}>
      <div
        className={classNames("TwoSiderTextWraper", { isProportional })}
        style={{
          background: fill,
        }}
      >
        {children}
      </div>
      <div
        className={classNames("TwoSiderImageWrapper", { isProportional })}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default TwoSider;
