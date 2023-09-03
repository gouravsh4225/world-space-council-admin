import { ReactElement, ReactNode, useState } from "react";
import {
  AvatarIcon,
  //   AppsIcon,
  //   DashboardIcon,
  //   WidgetIcon,
  //   FormsIcon,
  //   ChartIcon,
  //   TableIcon,
  //   ElementsIcon,
  //   DashboardIconElement,
  //   PagesIcon,
  //   SubmenuIcon,
  //   AvatarIcon,
  //   ErrorIcon,
  //   ExtraIcon,
} from "../../Icons";
import { SideBarMenuItem } from "./SideBarMenuItem";

export type SideBarMenuItemsType = {
  icon: ReactElement | ReactNode;
  label: string;
  rightIconClass: string;
  active: boolean;
  navigateUrl: string;
};

const SideBarMenuList: SideBarMenuItemsType[] = [
  //   {
  //     icon: <DashboardIcon />,
  //     label: "Dashboard",
  //     rightIconClass: "fa fa-chevron-right",
  //     active: true,
  //     navigateUrl: "/dashboard",
  //   },
  {
    icon: <AvatarIcon />,
    label: "Users",
    rightIconClass: "fa fa-chevron-right",
    active: true,
    navigateUrl: "/users",
  },
];

export const SideBarMenu = () => {
  const [sideBarMenus] = useState<SideBarMenuItemsType[]>(SideBarMenuList);
  return (
    <div className="main-sidemenu is-expanded">
      <ul
        className="side-menu open"
        style={{ marginRight: "0", marginLeft: "0" }}
      >
        <SideBarMenuItem menuList={sideBarMenus} />
      </ul>
    </div>
  );
};
