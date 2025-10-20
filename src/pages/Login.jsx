import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form>
        <label>Login</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <Link to={"/home"}>
          <button>login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
