import { WSCDropDown } from "../../DropDown/DropDown";

const HeaderNotification = () => {
  return (
    <div className="header-notify">
      <WSCDropDown>
        <WSCDropDown.Toggle className="no-caret-icon bg-transparent no-border shadow-none">
          <i className="fa fa-regular fa-bell header-icon"></i>
        </WSCDropDown.Toggle>
        <WSCDropDown.Menu>
          <WSCDropDown.MenuItem>
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              {/* <CartIcon /> */}
              <div>
                <div className="font-weight-bold">Order Placed</div>
                <div className="small text-muted">5 hour ago</div>
              </div>
            </a>
          </WSCDropDown.MenuItem>
          <WSCDropDown.MenuItem>
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              {/* <svg
                className="header-icon me-4"
                x="1008"
                y="1248"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M5 8h14V6H5z" opacity=".3"></path>
                <path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"></path>
              </svg> */}
              <div>
                <div className="font-weight-bold"> Event Started</div>
                <div className="small text-muted">45 mintues ago</div>
              </div>
            </a>
          </WSCDropDown.MenuItem>
          <WSCDropDown.MenuItem href="#/action-3">
            <a
              href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
              className="dropdown-item d-flex pb-3"
            >
              {/* <CalenderIcon /> */}
              <div>
                <div className="font-weight-bold">Your Admin launched</div>
                <div className="small text-muted">1 day ago</div>
              </div>
            </a>
          </WSCDropDown.MenuItem>
          <WSCDropDown.MenuItem>
            <div className=" text-center p-2 border-top">
              {" "}
              <a
                href="https://spruko.com/demo/dashtic/Dashtic/Html/email-inbox.html"
                className=""
              >
                View All Notifications
              </a>{" "}
            </div>
          </WSCDropDown.MenuItem>
        </WSCDropDown.Menu>
      </WSCDropDown>
    </div>
  );
};

export { HeaderNotification };
