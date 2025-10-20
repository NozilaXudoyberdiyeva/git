import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <Link to={"/location"}><li>Location</li></Link>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
