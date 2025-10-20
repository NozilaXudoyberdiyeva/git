import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Location</li>
        <Link to={"/"}>
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
