import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { WSCDropDown } from "../../DropDown/DropDown";
import { AvatarIcon } from "../../Icons";
import { useNavigate } from "react-router-dom";

const HeaderProfile = () => {
  const routerNavigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const onClickLogOut = () => {
    removeItem("userLoginToken");
    removeItem("userLoginDetails");
    routerNavigate("/login");
  };
  return (
    <div className="profile-dropdown">
      <WSCDropDown>
        <WSCDropDown.Toggle className="leading-none no-border bg-transparent no-caret-icon shadow-none">
          <AvatarIcon />
        </WSCDropDown.Toggle>
        <WSCDropDown.Menu>
          {/* <WSCDropDown.MenuItem>
            <div className="text-center">
              <a
                href="#!"
                className="dropdown-item text-center user pb-0 font-weight-bold"
              >
                John Thomson
              </a>{" "}
              <span className="text-center user-semi-title">App Developer</span>
              <div className="dropdown-divider"></div>
            </div>
          </WSCDropDown.MenuItem> */}
          <WSCDropDown.MenuItem>
            <div
              className="dropdown-item d-flex"
              onClick={() => onClickLogOut()}
            >
              <svg
                className="header-icon me-3"
                x="1008"
                y="1248"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path>
                <path
                  d="M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z"
                  opacity=".3"
                ></path>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z"></path>
              </svg>
              <div className="mt-1">Sign Out</div>
            </div>
          </WSCDropDown.MenuItem>
        </WSCDropDown.Menu>
      </WSCDropDown>
    </div>
  );
};

export { HeaderProfile };
