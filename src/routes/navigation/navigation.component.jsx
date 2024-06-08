import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {Crown} from "../../assets/crown.jsx"
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/" >
      <Crown className = "logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop" >Shop</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
