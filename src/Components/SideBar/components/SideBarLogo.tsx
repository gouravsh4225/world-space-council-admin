import LogoIcon from "../../../assets/Images/logo.png";

const SideBarLogo = () => {
  return (
    <div className="main-sidebar-header active">
      {" "}
      <a
        className="desktop-logo logo-light active d-flex align-items-center"
        href="#"
        // href="https://spruko.com/demo/dashtic/Dashtic/Html/index.html"
      >
        <img src={LogoIcon} className="main-logo" alt="logo" loading="lazy" />
        <span className="font-weight-bold">World Space Council</span>
      </a>
    </div>
  );
};

export { SideBarLogo };
