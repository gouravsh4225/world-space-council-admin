import "./_Header.scss";
// import { HeaderToggle } from "./Components/HeaderToggle";
import { HeaderBrand } from "./Components/HeaderBrand";
import { HeaderProfile } from "./Components/HeaderProfile";

const Header = () => {
  return (
    <div className="app-header header top-header">
      <div className="container-fluid main-container">
        <div className="d-flex">
          {/* <HeaderToggle /> */}
          <HeaderBrand />
          <div className="d-flex order-lg-2 ms-lg-auto align-items-center">
            {/* <HeaderNotification />  */}
            <HeaderProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
