import { Link } from "react-router-dom";

const HeaderBrand = () => {
  return (
    <Link className="header-brand" to={"/dashboard"}>
      World Space Council
    </Link>
  );
};

export { HeaderBrand };
