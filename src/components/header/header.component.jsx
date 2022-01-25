import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/task.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const currentUser = false;

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
        <Link className="option" to="/users">
          Add User
        </Link>
        <Link className="option" to="/tasks">
          Tasks
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => console.log("logout")}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
