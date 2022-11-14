import React, { useEffect } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/AuthSlice";
import { getUserDetails } from "../store/userActions";

const Header = () => {
  const { userToken, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //check if user loggedin

    if (userToken) {
      dispatch(getUserDetails());
    }
  }, [userToken, dispatch]);

  const logOutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo">Currency Exchanger</div>

      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <NavLink activeclassname="active" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            {userInfo ? (
              <button onClick={logOutHandler}>Logout</button>
            ) : (
              <NavLink activeclassname="active" to="/login">
                Sing In
              </NavLink>
            )}
          </li>
          <li>
            <NavLink activeclassname="active" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
