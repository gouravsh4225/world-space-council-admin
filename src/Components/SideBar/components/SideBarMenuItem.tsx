import { Fragment } from "react";
import { SideBarMenuItemsType } from "./SideBarMenu";
import { Link } from "react-router-dom";

type SideBarMenuItemType = {
  menuList: SideBarMenuItemsType[];
};
const SideBarMenuItem = (props: SideBarMenuItemType) => {
  const { menuList } = props;

  return (
    <Fragment>
      {menuList?.map((listItem: SideBarMenuItemsType) => (
        <li className="slide is-expanded" key={listItem.label}>
          <Link
            className="side-menu__item active is-expanded"
            data-bs-toggle="slide"
            to={listItem.navigateUrl}
          >
            {listItem.icon}
            <span className="side-menu__label">{listItem.label}</span>
            <i className={listItem.rightIconClass}></i>
          </Link>
        </li>
      ))}
    </Fragment>
  );
};

export { SideBarMenuItem };
