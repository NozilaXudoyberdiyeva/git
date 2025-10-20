import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contacts</li>

        <li>Location</li>
        <Link to={"/"}>
          <li>Login</li>
        </Link>

        <Link to={"/location"}><li>Location</li></Link>
        <li>Login</li>

      </ul>
    </div>
  );
};

export default Navbar;
