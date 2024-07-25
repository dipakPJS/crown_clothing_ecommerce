import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Crown} from "../../assets/crown.jsx"
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/" >
      <Crown className = "logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop" >Shop</NavLink>
          <NavLink className="nav-link" to="/sign-in" >Sign In</NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation; 
