import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <Link to="about">
        <li>About</li>
        </Link>
        <li>Contacts</li>
        <li>Location</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
