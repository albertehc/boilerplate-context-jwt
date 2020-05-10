import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useAuthContext } from "./../../context/auth/authContext";
import { setUserActionError } from "./../../context/auth/authActions";
import { logout } from "./../../api/auth.api.js";

export const Navbar = () => {
  const history = useHistory();
  const [{ logged }, dispatch] = useAuthContext();
  const handleLogout = () => {
    logout()
      .then(
        swal("Done!", `Log out success!`, "success", {
          button: false,
          timer: 2900,
        })
      )
      .then(dispatch(setUserActionError()))
      .then(history.push("/"));
  };
  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      {!logged && (
        <>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/signup"}>
            <button>Signup</button>
          </Link>
        </>
      )}
      {logged && (
        <>
          <Link to={"/edit"}>
            <button>Edit</button>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};
