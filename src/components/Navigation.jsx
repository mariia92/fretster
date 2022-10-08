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
            href={button.href}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              window.location.href = button.href;
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
