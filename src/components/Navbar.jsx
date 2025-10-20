import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <Link to={"/contacts"}>
        <li>Contacts</li>
        </Link>
        <li>Location</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
