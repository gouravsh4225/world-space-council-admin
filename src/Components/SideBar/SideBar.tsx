import { SideBarLogo } from "./components/SideBarLogo";
import { SideBarMenu } from "./components/SideBarMenu";

const SideBar = () => {
  return (
    <div>
      <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
      <div className="sticky" style={{ marginBottom: "0px" }}>
        <aside className="app-sidebar sidebar-scroll ps ps--active-y">
          <SideBarLogo />
          <SideBarMenu />
        </aside>
      </div>
    </div>
  );
};

export default SideBar;
