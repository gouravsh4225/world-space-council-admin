import { Fragment } from "react";
import { Dropdown } from "react-bootstrap";

const WSCDropDown = (props: any) => {
  return (
    <Fragment>
      <Dropdown>
        {props.children}
        {/* <Dropdown.Toggle className="nav-link icon no-caret-icon bg-transparent no-border">
          <i className="fa fa-regular fa-bell header-icon"></i>
        </Dropdown.Toggle> */}

        {/* <Dropdown.Menu>
          <Dropdown.Item>
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              <div>
                <div className="font-weight-bold">Order Placed</div>
                <div className="small text-muted">5 hour ago</div>
              </div>
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              <div>
                <div className="font-weight-bold"> Event Started</div>
                <div className="small text-muted">45 mintues ago</div>
              </div>
            </a>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              <div>
                <div className="font-weight-bold">Your Admin launched</div>
                <div className="small text-muted">1 day ago</div>
              </div>
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className=" text-center p-2 border-top">
              {" "}
              <a
                href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
                className=""
              >
                View All Notifications
              </a>{" "}
            </div>
          </Dropdown.Item>
        </Dropdown.Menu> */}
      </Dropdown>
    </Fragment>
  );
};

const WSCDropDownToggle = (props: any) => {
  return (
    <Dropdown.Toggle className={props.className}>
      {props.children}
    </Dropdown.Toggle>
  );
};

const WSCDropDownMenu = (props: any) => {
  return <Dropdown.Menu>{props.children}</Dropdown.Menu>;
};

const WSCDropDownMenuItem = (props: any) => {
  return <Dropdown.Item>{props.children}</Dropdown.Item>;
};

WSCDropDown.Toggle = WSCDropDownToggle;
WSCDropDown.Menu = WSCDropDownMenu;
WSCDropDown.MenuItem = WSCDropDownMenuItem;

export { WSCDropDown };
