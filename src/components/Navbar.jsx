import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>

        <Link to={"/contacts"}>
          <li>Contacts</li>
        </Link>

        <Link to={"/location"}>
          <li>Location</li>
        </Link>
        <Link to={"/"}>
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
