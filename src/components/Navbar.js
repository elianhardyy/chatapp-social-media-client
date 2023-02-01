import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  async function logout() {
    await fetch("http://localhost:4000/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    localStorage.removeItem("token");
    setUser("");
  }
  let menu;

  if (user.is_active === true) {
    menu = (
      <Link to="/login" onClick={logout}>
        Logout
      </Link>
    );
  } else {
    menu = (
      <>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/login">Login</Link>
      </>
    );
  }
  return <div>{menu}</div>;
};

export default Navbar;
