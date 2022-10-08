import React from "react";
import classnames from "classnames";

import "./Navigation.css";

const Navigation = ({ buttons, navigationHook }) => {
  return (
    <div className="Navigation">
      {buttons.map((button) => (
        <div
          className={classnames("Navigation-Button", {
            "Navigation-Button--active": button.isActive,
          })}
          key={button.text}
        >
          <a
            href={button.hash}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              navigationHook(button.hash)
            }}
          >
            {button.text}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Navigation;
