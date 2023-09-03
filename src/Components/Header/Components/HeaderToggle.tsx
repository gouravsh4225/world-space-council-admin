import { Fragment } from "react";

const HeaderToggle = () => {
  return (
    <Fragment>
      <div className="dropdown side-nav">
        <div className="app-sidebar__toggle" data-bs-toggle="sidebar">
          <a
            className="open-toggle"
            // href="#!"
          >
            <i className="header-icon fa fa-bars"></i>
          </a>
          <a
            className="close-toggle"
            // href="#!"
          >
            <i className="header-icon fa fa-close"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export { HeaderToggle };
